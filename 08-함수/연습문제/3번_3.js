/* let clap = 0;
let now_clap = 0;


function sam(n) {
  if (n == 3 || n == 6 || n == 9) {
    return true;
  }
}


function f(x, y) {
  if (x > y.length) {
    console.log(now_clap);
    return;
  } else {
    if (sam(y[x])) {
      clap++;
      now_clap++;
      f(x + 1);
    } else {
      f(x + 1);
    }
  }
}


function myGame(n) {

  for (i = 1; i <= n; i++) {
    var count = "" + i;
    f(i, count);
  }
  console.log("박수를 총 %d번 쳤습니다.", clap)
}


myGame(35);
 */




































// 문제 3

function sam(n) {
    if (n == 3 || n == 6 || n == 9) {
        return true;
    }
}

function myGame(n) {
    let clap = 0;
    for (i = 1; i <= n; i++) {
        let count = "" + i;


        place(0, count, clap);

    }
    console.log("박수를 총 %d번 쳤습니다.", clap)
}

myGame(35);

// y = count[x] z= clap
const place = function (x, y = "", z) {
    if (x > y.length - 1) {
        console.log(z)
    } else {
        if (sam(y[x])) {
            if (sam(y[x + 1])) {
                clap += 2;
            } else {
                clap++;
            }
        } else if (sam(y[x + 1])) {
        } else {
            console.log(i)
        }


    }
}
place("Hello Javascript");

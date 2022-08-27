/* function myGame(n) {
  let clap = 0;
  for (i = 1; i <= n; i++) {
    let count = "" + i;
    if (count[1] == 3 || count[1] == 6 || count[1] == 9) {
      if (count[0] == 3 || count[0] == 6 || count[0] == 9) {
        console.log("짝(%d) --> 2번", i);
        clap += 2;
      } else {
        console.log("짝(%d) --> 1번", i)
        clap++;
      }
    } else if (count[0] == 3 || count[0] == 6 || count[0] == 9) {
      console.log("짝(%d) --> 1번", i)
      clap++;
    } else {
      console.log(i)
    }
  }
  console.log(clap)
}

myGame(35); */

function myGame(n) {
  let clap = 0;
  for (i = 1; i <= n; i++) {
    let count = "" + i;
    if (count[0] == 3 || count[0] == 6 || count[0] == 9) {
      if (count[1] == 3 || count[1] == 6 || count[1] == 9) {
        console.log("짝(%d) --> 2번", i);
        clap += 2;
      } else {
        console.log("짝(%d) --> 1번", i)
        clap++;
      }
    } else if (count[1] == 3 || count[1] == 6 || count[1] == 9) {
      console.log("짝(%d) --> 1번", i)
      clap++;
    } else {
      console.log(i)
    }
  }
  console.log(clap)
}

myGame(35);
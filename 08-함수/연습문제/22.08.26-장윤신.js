// 문제 1
function printStar(max) {
  let count = "";
  for (i = 0; i < max; i++) {
    count = count + "*"
    console.log(count);
  }

}

printStar(5)




// 문제 2
function printRevStar(max) {
  for (i = 0; i < max; i++) {
    let count = "";
    for (j = 0; j < max - i; j++) {
      count += "*";
    }
    console.log(count);
  }
}

printRevStar(5);



// 문제 3

function myGame(n) {
  let clap = 0;

  for (i = 1; i <= n; i++) {
    let count = "" + i;
    let now_clap = "";

    function f(x) {
      if (x > count.length - 1) {
        return now_clap;
      } else {
        if (count[x] == 3 || count[x] == 6 || count[x] == 9) {
          clap++;
          now_clap += "짝";
          return f(x + 1);
        } else {
          return f(x + 1);
        }
      }
    }

    f(0);

    if (now_clap == 0) {
      console.log(count);
    } else {
      console.log("%s(%d) --> %d번", now_clap, count, now_clap.length)
    }
  }

  console.log("박수를 총 %d번 쳤습니다.", clap);
}

myGame(35);
// 처음엔 10의 자리까지만 가능하게 count[0]과 count[1]을 이용한 판별식을 만들었었다.
// 그러나 다른 자리의 수까지 가능하게 푸는게 답인듯하였고 (재귀함수 이용)
// 처음 풀이에 의존해서 그걸 기반으로 다음 풀이로 이어가려 했다.
// 그러나 처음 풀이에 너무 의존하다보니 코드가 쓸데없이 길어졌고 복잡해졌다.
// 재귀함수는 가장 기본이 되는 간단한 구조로 만들어야 하는데 x와 x+1을 포함하려고했다.
// 간단한 구조로 재귀함수를 만들고 나니 x의 자리수가 369 인지 판별하는 식이 하나만 필요해 굳이 판별식 또한 함수로 만들 필요가 없었다.



// 문제 4
function printStar(max, current = 1) {
  if (current > max) {
    return;
  } else {
    let count = "";

    for (i = 0; i < current; i++) {
      count += "*";
    }

    console.log(count);
    printStar(max, current + 1);
  }
}
printStar(5);




// 문제 5
function printRevStar(max, current = 1) {
  if (current > max) {
    return;
  } else {
    let count = "";

    for (i = 0; i < max - current + 1; i++) {
      count += "*";
    }

    console.log(count);
    printRevStar(max, current + 1);
  }
}

printRevStar(5);
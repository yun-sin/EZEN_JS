// 문제 3

// n이 3 or 6 or 9 인 경우 true를 반환하는 함수
function sam(n) {
  if (n == 3 || n == 6 || n == 9) {
    return true;
  }
}
// 밑에선 n에 count[1]을 넣어서 i= 33일경우 count[1] = 3이다 (count는 문자열 형태의 숫자), 즉 i의 10의 자리가


function myGame(n) {
  // 총 박수친 횟수를 세기 위한 변수 선언
  let clap = 0;
  for (i = 1; i <= n; i++) {
    let count = "" + i;  // 시작하면서 "i" 만듬

    // 10의 단위가 3 or 6 or 9 일 때
    /* if (count[1] == 3 || count[1] == 6 || count[1] == 9) { */
    if (sam(count[0])) {
      // 10의 단위가 3,6,9이면서 1의 단위가 3,6,9에 해당하는 경우 박수 2번
      if (sam(count[1])) {
        console.log("짝(%d) --> 2번", i);
        clap += 2;
      } else {
        // 10의 단위만 3,6,9일 때 박수 1번
        console.log("짝(%d) --> 1번", i)
        clap++;
      }
      // 1의 단위만 3,6,9이므로 박수 1번
    } else if (sam(count[1])) {
      console.log("짝(%d) --> 1번", i)
      clap++;
    } else {
      console.log(i)
    }
  }
  console.log("박수를 총 %d번 쳤습니다.", clap)
}

myGame(35);




// 가장 큰 문제 count[1] 이 30일때 10의 자리가 아닌 1의 자리를 본다
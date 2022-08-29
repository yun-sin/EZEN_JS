// 문제 3
function myGame(n) {

  let count = 0;

  for (let i = 1; i <= n; i++) {

    const str = i + "";

    let say = "";

    let clap = 0;

    // 숫자를 문자열로 변환하여 각 글자수만큼 반복
    for (let j of str) {

      if (j == "3" || j == "6" || j == "9") {
        say += "짝";
        clap++;
      }
    }

    if (clap == 0) {
      console.log(i);
    } else {
      console.log("%s (%d) --> %d번", say, i, clap);
      count += clap;
    }
  }

  console.log();
  console.log("박수를 총 %d번 쳤습니다.", count);
}

myGame(35);
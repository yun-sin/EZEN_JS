// 6행 7열의 빈 배열 만들기
var data = new Array(6);

for (let i = 0; i < data.length; i++) {
  data[i] = new Array(7);
}

console.log(data);

// 1씩 증가할 값
let counter = 1;

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    if (i == 0 && j < 3 || counter > 30) {
      data[i][j] = 0
    } else {
      data[i][j] = counter++
    }

  }
}

console.log(data);

/** 출력하기 */
// "\t"  탭키 
// "\n"  줄바꿈
for (let i = 0; i < data.length; i++) {
  let str = "";
  for (let j = 0; j < data[i].length; j++) {
    if (data[i][j] == 0) {
      str += "\t\t";
    } else if (data[i][j] > 0 && data[i][j] < 10) {
      str += data[i][j] + "\t\t"
    } else {
      str += data[i][j] + "\t"
    }
  }

  console.log(str);
}
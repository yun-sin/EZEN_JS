// 문제 1

for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// 문제 2

let i = 0;

while (i < 10) {

  if (i % 2 == 1) {
    console.log(i);
  }

  i++;
}

// 문제 3
var sum = 0;

for (let i = 1; i < 20; i++) {
  if (i % 2 == 0 || i % 3 == 0) {
    sum += i;
    console.log("i=%d 총합=%d", i, sum);
  }
}

// 문제 4

var cases = 0;

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j == 6) {
      console.log("[ %d, %d ]", i, j)

      cases++;
    }
  }
}

console.log("경우의 수는 %d개 입니다", cases)

// 문제 5 
// ?? JS로 테이블 만드는법 ??

// 풀이 1
for (i = 0; i < 4; i++) {

  let str = "";

  for (j = 0; j < 4; j++) {
    str += i + j;

    if (j + 1 < 4) {
      str += " ";
    }
  }
  console.log(str);
}

// 풀이 2 (마지막 공백 없애기)
for (i = 0; i < 4; i++) {

  let str = "";

  for (let j = i; j < i + 4; j++) {
    str += j;

    if (j + 1 < i + 4) {
      str += " ";
    }
  }
  console.log(str);
}






// 문제 6
let sum = "";

for (i = 1; i < 6; i++) {
  sum += ("%d", i);
  console.log(sum);
}


// 문제 7
const number = 2;
// const number = 1;

for (let i = 4 - number; i < 10; i += 2) {
  for (let j = 1; j < 10; j++) {
    console.log("%d x %d = %d", i, j, i * j);
  }
}

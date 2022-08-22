// // 문제 1

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

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

for (i = 0; i < 4; i++) {

  for (j = 0; j < 4; j++) {
    console.log(i + j)
  }
}

// 문제 6
var sum = "";

for (i = 1; i < 6; i++) {
  sum += ("%d", i);
  console.log(sum);
}

// 문제 7
for (let number = 1; number <= 2; number++) {
  if (number == 1) {
    console.log
  }
  continue;

  if (i > 9) {

  }
  break;
}


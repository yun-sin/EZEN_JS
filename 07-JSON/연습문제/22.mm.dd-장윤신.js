// 문제 1
/* const data = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result = { "A": 0, "B": 0, "AB": 0, "O": 0 };

let count_A = 0;
let count_B = 0;
let count_AB = 0;
let count_O = 0;

console.log(data[1]);
for (let i = 0; i < data.legnth; i++) {
  const k = data[i]
  if (k == "A") {
    count_A += 1;
  } else if (k == "B") {
    count_B++;
  } else if (k == 'AB') {
    count_AB++;
  } else {
    count_O++;
  }
}


console.log(count_A);
console.log(count_B);
console.log(count_AB);
result["A"] = count_A;
console.log(result); */


// 풀이
const blood = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];

const result = { "A": 0, "B": 0, "AB": 0, "O": 0 };

for (let i = 0)


// 문제 2-1
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83],
  }
/* 
for (var k in exam) {
  let sum = 0;
  for (let i = 0; i < exam[k].length; i++) {
    sum += exam[k][i];
  }
  let avg = sum / exam.철수.length;
  console.log("철수의 총점은 %d점 이고 평균은 %d점 입니다.", sum, avg)
} */

// 풀이
for (var k in exam) {
  let sum = 0;
  for (let y of exam[k]) {
    sum += y;
  }
  let avg = sum / exam[k].length;
  console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", k, sum, avg)
}

let sum = 0;
for (let i = 0; i < exam.철수.length; i++) {
  sum += exam.철수[i];
}
let avg = sum / exam.철수.length;
console.log("철수의 총점은 %d점 이고 평균은 %d점 입니다.", sum, avg)



// 문제 2-1
// 풀이

// 전체 학생에 대한 총점이므로 반복문의 바깥에서 변수 초기화
let sum = 0;


// JSON은 길이를 알 수 없기 때문에 
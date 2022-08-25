const grade = [
  ["철수", 92, 81, 76],
  ["영희", 76, 25, 84],
  ["민혁", 56, 17, 25]
];

let sum = 0;

for (let i = 0; i < grade.length; i++) {
  let per_sum = 0;
  for (let j = 1; j < grade[i].length; j++) {
    sum += grade[i][j]
    per_sum += grade[i][j]
  }
  console.log("%s의 총점은 %d 평균은 %d ", grade[i][0], per_sum, per_sum / (grade[i].length - 1));
}
console.log("전체 총합은 %d", sum);
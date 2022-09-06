const solution = (num) => {
  num = "" + num;
  let h = 0;
  for (i = 0; i < num.length; i++) {
    h += parseInt(num[i]);
  }
  num = parseInt(num);

  if (num % h == 0) {
    return true;
    // return `${num}의 모든 자릿수의 합은 ${h}입니다. ${num}은 ${h}로 나누어 떨어지므로 ${num}은 하샤드 수입니다`;
  } else {
    return false;
    // return `${num}의 모든 자릿수의 합은 ${h}입니다. ${num}은 ${h}로 나누어 떨어지지 않으므로 ${num}은 하샤드 수가 아닙니다`;
  }
};

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));

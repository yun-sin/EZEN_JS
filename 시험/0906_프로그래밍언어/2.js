const number = 151;

let sum = 0;
for (let i = 1; i <= number; i++) {
  if (i % 3 == 0) {
    console.log(i);
    sum += i;
  }
}
console.log("총합: %d", sum);

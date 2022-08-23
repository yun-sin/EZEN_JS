let data = [2, 33, 161, 67, 3];

let p = data.length
if (p % 2 == 1) {
  p = (p - 1) / 2
} else {
  p = p / 2
}

for (let i = 0; i <= p; i++) {
  let k = data.length - i - 1

  let tmp = data[i];
  data[i] = data[k];
  data[k] = tmp;
}

console.log(data);
const data = [3, 5, 1, 4, 2];
console.log(data);

for (let i = 0; i < data.length - 1; i++) {
  for (let j = i + 1; j < data.length; j++) {
    if (data[i] > data[j]) {
      let tmp = data[i];
      data[i] = data[j];
      data[j] = tmp;
    }
  }
}

console.log(data);
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }

  if (i > 10) {
    break;
  }

  console.log(i)
}
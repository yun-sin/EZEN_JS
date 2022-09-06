const solution = (K, N, M) => {
  let don = 0;
  if (K * N > M) {
    don = -(M - K * N);
  }

  console.log(`동수가 부모님께 받아야 하는 돈은 ${don}원입니다.`);
};

solution(30, 4, 100);
solution(250, 2, 140);
solution(20, 6, 120);
solution(20, 10, 320);

// 피보나치 수열에서 10번째 항목이 무엇인지 출력하시오.

// 0 1 1 2 3 5 8 13 21 34 55 ...

// f(0) = 0
// f(1) = 1
// f(2) = f(1) + f(0) = 1
// f(3) = f(2) + f(1) = 2
// f(4) = f(3) + f(2) = 3
// f(5) = f(4) + f(3) = 5
// f(6) = f(5) + f(4) = 8
// f(7) = f(6) + f(5) = 13
// f(8) = f(7) + f(6) = 21
// f(9) = f(8) + f(7) = 34
// f(10) = f(9) + f(8) = 55
//   ...

// f(n) = f(n-1) + f(n-2)

function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

const a = fibonacci(10);
console.log(a);

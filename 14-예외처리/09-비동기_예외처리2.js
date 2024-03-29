/** 비동기 처리에 대한 예외 처리 (2) */
const data = [1, 2, 3];

// timer처리와 같은 비동기 방식의 예외처리는 콜백함수 내부에서 처리해야 한다.
setTimeout(() => {
  try {
    console.log("배열탐색시작");
    for (let i = 0; i < 10; i++) {
      console.log(data[i].toFixed(2));
    }
  } catch (err) {
    console.log("에러발생(2)");
    console.error(err.name);
    console.error(err.message);
  }
  // 콜백함수 내부에서 처리된 예외처리는 발생한 에러 상황을 처리할 수 있기 때문에
  // 아래의 코드는 정상적으로 실행된다.
  console.log("배열탐색종료");
}, 1000);

console.log("프로그램 종료");

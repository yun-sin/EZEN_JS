// ES6 스타일의 모듈을 사용하기 위해서는
// 터미널에서 npm init 명령을 수행하여 "package.json" 파일을 생성하고,
// 그 파일에 '"type": "module"' 이라는 프로퍼티를 직접 추가해야 한다.
// 이 작업은 앞으로 모듈을 사용하는 모든 폴더에서 수행되어야 한다.

// 사용자 정의 함수를 작성.
function helloWorld() {
  console.log("Hello World");
}

// 하나의 모듈에서 단 하나의 기능만을 내보낼 때
// import할 때 이름을 마음대로 설정가능
export default helloWorld;

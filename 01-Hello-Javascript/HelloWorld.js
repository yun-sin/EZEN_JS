"use strict" // 엄격모드 적용 --> ES6 호환기능만 사용하도록 명시

// 메시지 그룹핑
console.group("MyMessage1");
    console.log("안녕1");
    console.log("안녕2");
    console.log("안녕3");
console.groupEnd();

console.group("MyMessage2");  // 출력하는 내용을 그룹으로 묶음
    console.log("안녕4");

    console.group("MyMessage2-1"); // 그룹안에 하위그룹 생성
        console.log("안녕5");
        console.log("안녕6");
    console.groupEnd();  // 하위 그룹으로 묶기 끝 !!
console.groupEnd(); // 그룹으로 묶기 끝 !!


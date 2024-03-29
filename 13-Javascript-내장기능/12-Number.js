/**
 * Number는 숫자 처리와 관련된 기본 기능들을 제공하는 내장 클래스.
 */

const k = "123";
// 문자열을 정수로
console.log(typeof parseInt(k));
// 문자열을 실수로
console.log(typeof parseFloat(k));

//
// 객체의 생성
var a = new Number(123); // a === 123은 false
console.log(a); // [Number: 123]
console.log(typeof a); // object
console.log(a == 123); // true
console.log(a === 123); // false

var b = Number("123.45"); // b === 123.45은 true
console.log(b); // 123.45
console.log(typeof b); // number
console.log(b === 123.45); // true

/** (정적) 속성 */
// 표현 가능한 가장 큰 양수.
console.log(Number.MAX_VALUE);

// 표현 가능한 가장 작은 양수. 즉 0보다는 크지만 0에 가장 가까운 양수.
console.log(Number.MIN_VALUE);

// "숫자가 아님"을 나타내는 특별한 값.
console.log(Number.NaN); // NaN
console.log(isNaN(Number.NaN)); // true

/** (정적) 메서드 */
// 주어진 값이 NaN인지 확인 (isNaN과 동일)
// 숫자 변환이 불가능하면 true, 가능하면 false
console.log(Number.isNaN("123")); // false

// 주어진 값이 정수인지 확인
console.log(Number.isInteger("123")); // false
console.log(Number.isInteger(123)); // true

// 내장 함수 parseFloat()와 동일
// 앞에서 소개한 Number() 함수와 동일
console.log(Number.parseFloat("123"));

// 내장 함수 parseInt()와 동일
console.log(Number.parseInt("123"));

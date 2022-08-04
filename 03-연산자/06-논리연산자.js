// 1) and
// --> 전체가 참인 경우만 결과가 참.
console.group("1) and");
console.log(true && true);      // true
console.log(true && false);     // false
console.log(false && true);     // false
console.log(false && false);    // false
console.groupEnd();

// 2) and연산 여러 개 사용
console.group("2) and연산 여러 개 사용");
console.log(true && true && true);      // true
console.log(true && true && false);     // false
console.log(false && false && true);    // false
console.log(false && true && true);     // false
console.groupEnd();

// 3) or
// 하나라도 true가 포함되어 있따면 결과는 true
console.group("3) or")
console.log(true || true);      // true
console.log(true || false);     // true
console.log(false || true);     // true
console.log(false || false);    // false
console.groupEnd();

// 4) or연산 여러 개 사용
console.group("4) or연산 여러 개 사용");
console.log(true || true || true);      // true
console.log(true || true || false);     // true
console.log(false || false || true);    // true
console.log(false || true || true);     // true
console.groupEnd();


// 5) 복합사용
// AND가 OR보다 항상 우선한다.
console.group("5) 복합사용")
// t || t -> t
console.log(true && true || true);
// t || f -> t
console.log(true && true || false);
// f || t -> t
console.log(false && false || true);
// f || t -> t
console.log(false && true || true);

// t || t -> t
console.log(true || true && true);
// t || f -> t
console.log(true || true && false);
// f || f -> f
console.log(false || false && true);
// f || t -> t
console.log(false || true && true);
console.groupEnd();


// 6) not
console.group("6) not");
let success = true;
let fail = !success;        // !true 이므로 false
console.log(fail);

let k = 1;              // 숫자 1은 true에 대응
console.log(!k);        // false

let l = 0;              // 숫자 0은 false에 대응
console.log(!l);        // true

let str1 = "Hello";     // 내용이 있는 문자열은 true
console.log(!str1);     // false

let str2 = "";          // 내용이 없는 문자열은 false
console.log(!str2);     // true
console.groupEnd();     



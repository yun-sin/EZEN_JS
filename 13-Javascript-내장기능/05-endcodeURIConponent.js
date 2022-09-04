/**
 * encodeURIComponent(string)
 *
 * 알파벳과 숫자 및 비예약 표식을 제외한 모든 글자를 URL에 포함시킬 수 있는 문자열로 인코딩한다.
 * -> URL에 사용해도 문제가 없는 특수문자를 제외하고 모든 글자를 변환
 *
 * 인터넷 주소에서 쓰는 특수 문자  : ; / = ? &  까지 변환을 합니다. 인터넷 주소를 하나의 변수에 넣을때 쓸 수 있습니다.
 */

const set1 = ";,/?:@^=+$#"; // 예약 문자 (encodeURI와 encodeURIComponent의 차이?)
const set2 = "-_.!~*'()"; // 비예약 표식
const set3 = "ABC abc 123"; // 알파벳 및 숫자 , 공백
const set4 = "자바스크립트";

const enc1 = encodeURIComponent(set1); // %3B%2C%2F%3F%3A%40%5E%3D%2B%24%23
const enc2 = encodeURIComponent(set2); // 그대로 -_.!~*'()
const enc3 = encodeURIComponent(set3); // ABC%20abc%20123
const enc4 = encodeURIComponent(set4);

console.group("encodeURIComponent");
console.log(enc1);
console.log(enc2);
console.log(enc3);
console.log(enc4);
console.groupEnd();

// 디코딩 수행
console.group("decodeURIComponent");
console.log(decodeURIComponent(enc1));
console.log(decodeURIComponent(enc2));
console.log(decodeURIComponent(enc3));
console.log(decodeURIComponent(enc4));
console.groupEnd();

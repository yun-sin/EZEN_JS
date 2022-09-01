/**
 * encodeURI(string)
 *
 * 주어진 문자열을 URL에 포함시키기에 적절한 형태로 변환(=인코딩)하는 처리
 * 인코딩하지 않는 문자.
 *  A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
 */

// [잘못된 경우]
// <a href="자바스크립트.html">click</a>

// [올바른 경우]
// <a href="%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8.html">click</a>

const set1 = ";,/?:@^=+$#";
const set2 = "-_.!~*'()";
const set3 = "ABC abc 123";
const set4 = "자바스크립트";

const enc1 = encodeURI(set1); // 그대로
const enc2 = encodeURI(set2); // 그대로
const enc3 = encodeURI(set3); // ABC%20abc%20123 (공백은 %20으로 인코딩)
const enc4 = encodeURI(set4);

console.group("encodeURI");
console.log(enc1);
console.log(enc2);
console.log(enc3);
console.log(enc4);
console.groupEnd();

// 인코딩 된 문자열을 원래의 문자열로 역변환 (디코딩)
console.group("decodeURI");
console.log(decodeURI(enc1));
console.log(decodeURI(enc2));
console.log(decodeURI(enc3));
console.log(decodeURI(enc4));
console.groupEnd();

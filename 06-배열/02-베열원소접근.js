/** 인덱스 번호를 활용한 개별 원소 접근 */
let myArr1 = [1, 3.14, true, "hello"];
console.log("[0]=%d, [1]=%d, [2]=%s, [3]=%s", myArr1[0], myArr1[1], myArr1[2], myArr1[3]);



/** 구조분해 */
// 배열의 각 원소를 새로운 변수 a,b,c에 나누어서 저장하기
let myArr2 = [100, 200, 300];
const [a, b, c] = myArr2;
console.log("a=%d, b=%d, c=%d", a, b, c);

// 구조분해를 수행한 나머지를 별도로 분리하기
let [b1, b2, ...rest_b] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(b1); // 1
console.log(b2); // 2
console.log(rest_b); // [3, 4, 5, 6, 7, 8, 9]



/** 존재하지 않는 원소에 대한 접근 */
// 100이라는 하나의 원소를 갖는 한 칸으로 구성된 배열
let myArr = [100];
console.log(myArr);

// 0번째 원소를 변수에 할당하고 출력 -> OK
let item1 = myArr[0];
console.log(item1);

// 1번째 원소를 변수에 할당하고 출력 -> fail
// myArr은 1개의 원소를 갖기 때문에 인덱스 번호는 0만 존재함.
let item2 = myArr[1];
console.log(item2);

if (item2 !== undefined) {
  console.log("1번째 원소 존재함");
} else {
  console.log("1번째 원소 존재하지 않음");
}

// 비구조 문법으로 값 복사하기
let [x, y] = myArr;
console.log(x);  // 100
console.log(y);  // undefined
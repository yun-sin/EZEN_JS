/**
 * 배열의 원소를 추가, 삭제, 변경하는방법
 */

// 테스트를 위한 배열
const data = [10, 20, 30, 40, 50];

// 배열의 맨 끝에 요소 추가 (파라미터 수 제한 없음.)
data.push(60, 70);
console.log(data);

// 마지막 요소를 리턴하고 제거
const k = data.pop();
console.log(k);
console.log(data);

// 맨 앞 요소를 리턴하고 제거
const x = data.shift();
console.log(x);
console.log(data);

// 맨 앞에 요소 추가 (파라미터 수 제한 없음)
const y = data.unshift(0, 10);
console.log(data);

// 2번째 위치부터 3개를 잘라서 반환하고 원본에서는 제거
const z = data.splice(2, 3);
console.log(z);
console.log(data);

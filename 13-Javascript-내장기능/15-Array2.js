/**
 * 배열을 탐색하는 방법
 */

// 테스트를 위한 배열
const arr1 = [10, 20, 30, 40, 50];

/**
 * 고전적 방법 - 반복문을 활용하여 배열의 원소 탐색하기
 */
for (let i = 0; i < arr1.length; i++) {
  if (i == 3) {
    console.log(" ~~~ 반복중단 !!! ");
    break;
  }
  console.log("%d번째 원소 ==> %d", i, arr1[i]);
}

console.log("----------------------");

/**
 * forEach 메서드를 활용하여 배열의 모든 원소 탐색.
 * - 콜백함수에게 배열의 값과 인덱스를 전달한다.
 * - 콜백함수는 원소의 수 만큼 순차적으로 실행된다.
 * - 콜백함수는 비동기처리되기때문에 각 원소의 탐색을 독립적으로 수행함.
 * - 독립적으로 수행하므로 검색속도가 빠르다.
 */

const arr2 = [10, 20, 30, 40, 50];

arr2.forEach((v, i) => {
  if (i == 3) {
    console.log("~~~ 반복중단 !!! ");
    // break는 for,while문에서만 사용 가능하기 때문에 함수 안에서는 사용할 수 없다.
    // forEach의 콜백함수에서 반복을 중단하고자 return을 사용할 경우 현재 동작중인 콜백만 종료될 뿐 전체 반복에는 영향이 없다.
    // i == 3 만 return하고 i == 4 는 그대로 나온다
    return;
  }
  console.log("%d번째 원소 ==> %d", i, v);
});

console.log("--------------");

/**
 * 탐색을 중단하는 기능을 제공하는 some함수
 * - some 함수는 콜백함수가 true를 리턴하는 순간 순환을 중단한다.
 */

const arr3 = [10, 20, 30, 40, 50];

arr3.some((v, i) => {
  if (i == 3) {
    console.log("~~~ 반복중단 !!!");
    return true;
  }
  console.log("%d번째 원소 ==> %d", i, v);
});

console.log("------------");

/**
 * 배열의 원소를 가공하여 새로운 배열 만들기
 */
// map함수에 전달된 콜백이 리턴하는 값들을 하나의 배열로 묶어서 hello에 저장
// hello = [o,o,o,o,o]
// hello는 반드시 원본 배열과 같은 길이를 갖는 배열이다.
// v -> 10 20 30 40 50
// i -> 0  1  2  3  4
// 리턴하지 않은 index에 대한 원소는 undefined가 된다.
const arr4 = [10, 20, 30, 40, 50];
const hello = arr4.map((v, i) => {
  return v * 10;
});

console.log(hello);

// 화살표 함수는 처리로직이 한 줄인 경우 "{}"와 ";", "return" 키워드 생략 가능하므로 아래와 같이도 표현 가능함
const arr5 = [10, 20, 30, 40, 50];
const world = arr5.map((v, i) => v * 10);

console.log(world);

/**
 * 배열 검색
 */
const arr6 = [5, 12, 8, 131, 44];

// 주어진 판별함수를 만족하는 첫번째 값을 반환한다. 못 찾으면 undefined를 반환한다.
// 찾고자 하는 항목이 아닌 검색 규칙을 구현한 콜백함수를 전달해야 한다.
const found = arr6.find(function (v) {
  // 파라미터로 전달되는 v는 배열의 모든 원소가 순차적으로 전달된다.
  console.log(v);

  // v를 우리가 원하는 조건에 충족하는지 검사하여 true/false를 리턴
  // true를 리턴하는 순간 배열의 탐색을 중단한다. (break와 동일한 기능)
  if (v % 2 == 0) {
    // true가 리턴되는 경우 v는 found에 저장된다.
    return true;
  } else {
    // false가 리턴되는 경우 v는 버려진다.
    return false;
  }
});

console.log(found);

/**
 * 배열에서 특정 조건을 충족하는 원소를 추출하기
 */
// 1) 전통적인 방법
const arr7 = [5, 12, 8, 131, 44];
const d1 = [];

for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] % 2 == 0) {
    d1.push(arr7[i]);
  }
}
console.log(d1);

// 2) forEach를 사용하는 방법
const arr8 = [5, 12, 8, 131, 44];
const d2 = [];

arr8.forEach((v, i) => {
  if (v % 2 == 0) {
    d2.push(v);
  }
});
console.log(d2);

// 3) filter를 사용하는 방법
const arr9 = [5, 12, 8, 131, 44];
const d3 = arr9.filter(function (v, i, arr) {
  console.log("v=%d, i=%d, arr=%s", v, i, arr);

  if (v % 2 == 0) {
    // true가 리턴되는 경우 v는 results 배열의 원소로 저장된다.
    // true를 리턴하더라도 배열의 모든 원소를 탐색하기 전까지는 종료되지 않는다.
    return true;
  } else {
    // false가 리턴되는 경우 v는 버려진다.
    return false;
  }
});
console.log(d3);

/**
 * 배열 정렬
 */
const arr10 = [2, 1, 15];
// 퀵정렬 알고리즘을 사용하여 배열 자체를 정렬한다.
// --> 배열의 모든 원소를 문자열로 취급하기 때문에 글자 정렬기준이 적용된다. (폴더 이름순 정렬처럼)
// arr10.sort();
// console.log(arr10);

// sort 함수도 정렬 조건을 콜백함수로 처리한다.
arr10.sort(function (a, b) {
  // 정렬을 위해 비교되는 원소값들이 파라미터로 정렬된다.
  console.log("a=%s, b=%s", a, b);

  // 리턴값이 양수인 경우: a가 b보다 크다
  // 리턴값이 음수인 경우: b가 a보다 크다
  //   이 함수가 리턴하는 값이 0보다 작을 경우,  a가 b보다 앞에 오도록 정렬하고,
  // 이 함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬합니다.
  // 출처: https://hianna.tistory.com/409 [어제 오늘 내일:티스토리]
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

console.log(arr10);

/**
 * 역순배치
 */
let arr11 = [1, 2, 3, 4, 5];
arr11.reverse();
console.log(arr11);

/** 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환 */
let arr12 = [1, 2, 3, 4, 5];

/**
 * accumulator : 직전 콜백이 리턴한 값
 * currntValue : 이번 회차에 탐색되는 배열 원소
 * index : 이번 회차에 탐색되는 배열 원소의 인덱스 (생략가능)
 * array : 배열 원본 (여기서는 arr12자체, 생략가능)
 *
 * 최초 실행시 accumulator에는 0번째 원소인 1이 전달되고 currentValue에는 1번째 원소인 2가 전달되며, index는 currentValue에 대한 1이 전달된다.
 *
 * 두 번째 실행부터 acc에는 이전 회차에서 리턴한 값이 되돌아온다. 그리고 cur에는 2번째부터 순서대로 매 실행회차마다 다음 원소가 전달된다.
 *
 * 즉, reduce는 배열의 모든 원소를 탐색하면서 누적 결과를 만들고자 할 경우 사용한다.
 */
const result = arr12.reduce((accumulator, currentValue, index, array) => {
  console.log(`acc=${accumulator}, cur=${currentValue}, index=${index}`);
  return accumulator + currentValue;
});

console.log(result);

// 불필요한 파라미터를 생략하고 코드를 간단히 표현
const result2 = arr12.reduce((acc, cur) => acc + cur);
console.log(result2);

/** accumulator의 초기값 지정하기 */
// reduce의 콜백함수 다음에 두 번째 인자로 accumulator의 초기값을 설정할 수 있다.
// 이 경우 currentValue에는 배열(arr12)의 0번째 요소부터 전달되고 index는 0부터 시작된다.
const result3 = arr12.reduce((acc, cur, index, array) => {
  console.log(acc, cur, index);
  return acc + cur;
}, 0);

console.log(result3);

/** 응용 (객체에서) */
const covid19 = [
  { date: "0125", active: 426 },
  { date: "0126", active: 326 },
  { date: "0127", active: 626 },
  { date: "0128", active: 26 },
  { date: "0129", active: 428 },
  { date: "0130", active: 926 },
  { date: "0131", active: 222 },
  { date: "0201", active: 625 },
];

// 전체 확진자 수 구하기
// 객체를 탐색할 때는 accumulator의 초기값을 설정하고 0번째 원소부터 currentValue로 받아야 한다.
const total = covid19.reduce((acc, cur) => acc + cur.active, 0);
console.log(total);
console.log("평균 확진자수 : %d", total / covid19.length);

/** 날짜계산 */

// timestamp 확인하기
// timestamp -> 1970년 1월 1일 자정부터 현재까지 흐른 시간을 초단위로 환산한 값
// getTime()함수는 timestamp를 밀리세컨드단위로 환산하여 반환한다.
const date = new Date();
const ts1 = date.getTime();
console.log(ts1);

// 몇일이 지났는지 계산하기
const prevDate = new Date(date.getFullYear(), 0, 1);
const ts2 = prevDate.getTime();
const tmp1 = ts1 - ts2;
console.log(tmp1);
// 계산 결과를 원하는 단위로 환산 --> 24시간 * 60분 * 60초 * 1000
// 과거의 시점으로부터 지나온 시간을 계산할 경우 소수점을 내린다.
// 1.8일 지났습니다 -> 1일 지났습니다.
const day1 = Math.floor(tmp1 / (24 * 60 * 60 * 1000));
console.log(day1);

// 몇일이 남았는지 계산하기
const nextDay = new Date(date.getFullYear(), 11, 31);
const ts3 = nextDay.getTime();
const tmp2 = ts3 - ts1;
// 미래의 시점으로 남은 시간을 계산할 경우 소수점을 올린다.
//  0.4일 남았습니다 -> 1일남았습니다.
console.log(Math.ceil(tmp2 / (24 * 60 * 60 * 1000)));

/** 응용 달력 출력하기*/
// 일단 이달의 1일의 요일을 구한다.
const d1 = new Date();

console.log(d1.toLocaleString());

d1.setDate(1);
const w1 = d1.getDay();
console.log(w1);

// 이달의 마지막 날을 구한다 (달에 +1 일에 0대입한후 getDate)
let d2 = d1;
d2.setMonth(d1.getMonth() + 1);
d2.setDate(0);
const lastDay = d2.getDate();
console.log(lastDay);

// 6행 7열의 빈배열을 만든다
date4 = new Array(6);
for (i = 0; i < date4.length; i++) {
  date4[i] = new Array(7);
}

// i가 0일때 j가 w1(1일의 요일)보다 작으면 그값에 0을 넣음
// counter가 이달의 마지막날 보다 커지면 그값에 0을 넣음
let counter = 1;

for (i = 0; i < date4.length; i++) {
  for (j = 0; j < date4[i].length; j++) {
    if ((i == 0 && j < w1) || counter > lastDay) {
      date4[i][j] = 0;
    } else {
      date4[i][j] = counter++;
    }
  }
}

for (i = 0; i < date4.length; i++) {
  let dc1 = "";
  for (j = 0; j < date4[i].length; j++) {
    if (date4[i][j] == 0) {
      dc1 += "   ";
    } else if (date4[i][j] < 10) {
      dc1 += date4[i][j] + "  ";
    } else {
      dc1 += date4[i][j] + " ";
    }
  }
  console.log(dc1);
}

console.log(date4[3][4]);

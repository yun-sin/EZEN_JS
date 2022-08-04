// // 문제 1
// const year = 2022;
// let birthYear = 1995;
// let age = year - birthYear + 1;
// console.log("나는 %d세 입니다.", age);

// // 문제 2
// const age = 28;
// var year;
// year = 2022 - age + 1;
// console.log("\"나는 %d년도에 태어났습니다.", year);


// // 문제 3
// let numOfApples = 123;
// let leftApples = numOfApples % 10;

// console.log("사과의 개수는 %d개 이고," , numOfApples)
// console.log("바구니에 10개씩 담았을 때 남는 사과는 %d개 이므로.", leftApples);

// let bucket = (numOfApples / 10 ) + (leftApples > 0 ? 1 : 0) - leftApples/10;

// console.log("필요한 바구니의 개수는 %d개 입니다.", bucket);

// 문제 4

let i = 457;
let j = i - i % 100;
console.log(j);
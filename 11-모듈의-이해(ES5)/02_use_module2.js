// 모듈을 통해서 참조된 객체는 MyModule2의 모든 기능을 내장한 객체가 된다.
var my = require("./MyModule2");

console.log(my.name);
console.log(my.property.id);
console.log(my.property.type);

my.say();

console.log(my.home.postcode);
console.log(my.home.address);
my.home.getAddress();

/** import{name,property,say,home} */
// 1) 순서 상관 X
// 2) 필요 없는 기능은 생략 가능.
// 3) 이름은 반드시 동일해야 함.

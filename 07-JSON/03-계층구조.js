var centerPoint = {
  x: 5,
  y: 10
};

var circle1 = {
  center: centerPoint,
  radius: 5.10
};

console.group("circle1");
console.log("원의 중점: (%d, %d)", circle1.center.x, circle1.center.y);
console.log("원의 반지름: %d", circle1.radius);
console.groupEnd();

/** 2) 계층적으로 정의된 경우 */
var circle2 = {
  center: {
    x: 5,
    y: 10
  },
  radius: 5.10
};

console.group("circle2");
console.log("원의 중점: (%d, %d)", circle2.center.x, circle2.center.y);
console.log("원의 반지름: %d", circle2.radius);
console.groupEnd();
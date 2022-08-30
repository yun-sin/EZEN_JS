/** 멤버변수만 정의한 클래스 */
class MemberClass {
  // 멤버변수 정의
  userName = null;
  email = null;
}

// 클래스를 활용한 객체 생성
const m1 = new MemberClass();
console.log(m1);
console.log(m1.userName);
console.log(m1.email);

const m2 = new MemberClass();
console.log(m2);
console.log(m2.userName);
console.log(m2.email);

// 객체의 특성 -> 같은 구조를 갖지만 저장되는 내용은 개별적이다.
m1.userName = "민혁";
m1.email = "mh@gmail.com";

m2.userName = "철수";
m2.email = "cs@gmail.com";

console.log(m1);
console.log(m1.userName);
console.log(m1.email);

console.log(m2);
console.log(m2.userName);
console.log(m2.email);

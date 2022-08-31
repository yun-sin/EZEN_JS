// 문제 1

class Student {
  #kor;
  #eng;
  #math;

  constructor(kor, eng, math) {
    this.#kor = kor;
    this.#eng = eng;
    this.#math = math;
  }

  get kor() {
    return this.#kor;
  }

  set kor(val) {
    this.#kor = val;
  }

  get eng() {
    return this.#eng;
  }

  set eng(val) {
    this.#eng = val;
  }

  get math() {
    return this.#math;
  }

  set math(val) {
    this.#math = val;
  }

  sum() {
    return this.kor + this.eng + this.math;
  }

  avg() {
    return this.sum() / 3;
  }
}

const grade = [
  { 이름: "철수", 국어: 92, 영어: 81, 수학: 77 },
  { 이름: "영희", 국어: 72, 영어: 95, 수학: 98 },
  { 이름: "민혁", 국어: 80, 영어: 86, 수학: 84 },
];

/* 
const grade = [
  ["철수", 92, 81, 77],
  ["영희", 72, 95, 98],
  ["민혁", 80, 86, 84],
]; */

for (const k of grade) {
  const s = new Student(k.국어, k.영어, k.수학);
  console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", k.이름, s.sum(), s.avg());
}

// 문제 2
class Rectangle {
  #width;
  #height;

  constructor() {
    this.#width = null;
    this.#height = null;
  }

  get width() {
    return this.#width;
  }

  set width(val) {
    this.#width = val;
  }

  get height() {
    return this.#height;
  }

  set height(val) {
    this.#height = val;
  }

  getAround() {
    return (this.width + this.height) * 2;
  }

  getArea() {
    return this.width * this.height;
  }
}

const a = new Rectangle();
a.width = 10;
a.height = 5;
console.log("둘레의 길이는 %d이고 넓이는 %d입니다.", a.getAround(), a.getArea());

// 문제 3
class Student {
  #major;
  #id;

  constructor(major, id) {
    this.#major = major;
    this.#id = id;
  }

  get major() {
    return this.#major;
  }

  set major(val) {
    this.#major = val;
  }

  get id() {
    return this.#id;
  }

  set id(val) {
    this.#id = val;
  }

  sayHello() {
    console.log("나는 %s학과 %d학번 입니다.", this.major, this.id);
  }
}

const stud = new Student("컴퓨터", 202004123);
stud.sayHello();

// 문제 4
class Account {
  #owner;
  #balance;

  constructor(owner, balance) {
    this.#owner = owner;
    this.#balance = balance;
  }

  get owner() {
    return this.#owner;
  }

  set owner(val) {
    this.#owner = val;
  }

  get balance() {
    return this.#balance;
  }

  set balance(val) {
    this.#balance = val;
  }

  deposit(amount) {
    return (this.balance += amount);
  }

  withdraw(long) {
    if (this.balance < long) {
      console.log("잔액이 부족합니다.");
      return;
    }
    return (this.balance -= long);
  }
}

const acc = new Account("Hello", 15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

acc.deposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

acc.deposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

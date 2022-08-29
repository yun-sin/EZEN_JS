// 문제 1
const student = function (국어, 영어, 수학) {
  this._kor = 국어;
  this._eng = 영어;
  this._mat = 수학;
};

// 합계를 리턴하는 메서드
student.prototype.sum = function () {
  return this._kor + this._eng + this._mat;
};

// 평균을 리턴하는 메서드
student.prototype.avg = function () {
  return this.sum() / 3;
};

// 객체 생성하기
const 철수 = new student(92, 81, 77);
const 영희 = new student(72, 95, 98);
const 민혁 = new student(80, 86, 84);

console.log("철수의 총점은 %d점 이고 평균은 %d점 입니다.", 철수.sum(), 철수.avg());
console.log("영희의 총점은 %d점 이고 평균은 %d점 입니다.", 영희.sum(), 영희.avg());
console.log("민혁의 총점은 %d점 이고 평균은 %d점 입니다.", 민혁.sum(), 민혁.avg());







// 문제 2
const Rectangle = function () {
  this._width = null;
  this._height = null;
}
Rectangle.prototype = {

  // 멤버변수 _width에 대한 getter, setter
  get width() {
    return this._width;
  },

  set width(param) {
    this._width = param;
  },


  get height() {
    return this._height;
  },

  set height(param) {
    this._width = param;
  },



  // 메서드
  getAround: function () {
    return (this._width * 2 + this._height * 2);
  },

  getArea: function () {
    return (this._width * this.height);
  }
};





// 생성자를 통한 객체 생성
const P2 = new Rectangle();

// 멤버변수 변경?
P2._width = 10;
P2._height = 5;


console.log("둘레의 길이는 %d이고 넓이는 %d입니다.", P2.getAround(), P2.getArea())



// 문제 3
// 1. String형의 학과와 정수형의 학번을 프로퍼티로 선언후 생성자를 통해 주입
// 타입을 어떻게 지정하지?
function Student(major, ID) {
  this._major = major;
  this._ID = ID;
}

Student.prototype = {
  get major() {
    return this._major;
  },

  set major(param) {
    this._major = param;
  },

  get ID() {
    return this._ID;
  },

  set ID(param) {
    this._ID = param;
  },

  sayHello: function () {
    console.log("나는 %s학과 %d학번 입니다.", this._major, this._ID);
  }
};

const stud = new Student("컴퓨터", 202004123);
stud.sayHello();





// 문제 4
function Account(owner, balance) {
  this._owner = owner;
  this._balance = balance;
};

Account.prototype = {
  get owner() {
    return this._owner;
  },
  set owner(param) {
    this._owner = param;
  },

  get balance() {
    return this._balance;
  },
  set balance(param) {
    this._balance = param;
  },

  deposit: function (amount) {
    return this._balance += amount;
  },

  withdraw: function (longamount) {
    if (longamount > this._balance) {
      console.log("잔액이 부족합니다.");
      return;
    }
    return this._balance -= longamount;
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

// 문제 1

function student(국, 영, 수) {
  this._kor = 국;
  this._eng = 영;
  this._math = 수;
};

student.prototype = {
  get kor() {
    return this._kor;
  },

  set kor(param) {
    this._kor = param;
  },

  sum: function () {
    return this._kor + this._eng + this._math
  },

  avg: function () {
    return this.sum() / 3;
  }
};

const grade = [
  ["철수", 92, 81, 77],
  ["영희", 72, 95, 98],
  ["민혁", 80, 86, 84]
]

for (const p of grade) {
  const a = new student(p[1], p[2], p[3]);
  console.log(p[0], a.sum(), a.avg());
}
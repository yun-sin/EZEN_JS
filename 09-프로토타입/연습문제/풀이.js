function Student(kor, eng, math) {
  this._kor = kor;
  this._eng = eng;
  this._math = math;
}

Student.prototype = {

  sum: function () {
    return this._kor + this._eng + this._math;
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


for (item of grade) {
  const s = new Student(item[1], item[2], item[3])
  console.log(item[0], s.sum(), s.avg())
}




// 문제 2
function Rectangle() {
  this._width;
  this._height;
};

Rectangle.prototype = {
  get width() {
    return this.width;
  },

  set width(param) {
    this.width = param;
  },

  get height() {
    return this._height;
  },

  set height(param) {
    this._height = param;
  },

  getAround: function () {
    return this._width * 2 + this._height * 2;
  },

  getArea: function () {
    return this._width * this._height
  }
};

const a = new Rectangle();
a.width = 10;

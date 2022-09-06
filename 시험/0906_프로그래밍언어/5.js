class Student {
  _grade;

  constructor() {
    this._grade = [];
  }

  set grade(val) {
    return this._grade.push(val);
  }

  getSumAvg() {
    let sum = this._grade.reduce((acc, cur) => acc + cur);
    let avg = sum / this._grade.length;
    return [sum, avg];
  }

  getMinMax() {
    let min = Math.min.apply(null, this._grade);
    let max = Math.max.apply(null, this._grade);
    return { 최하점: min, 최고점: max };
  }

  getVar() {
    let avg = this.getSumAvg()[1];
    let dev = 0;
    for (let i = 0; i < this._grade.length; i++) {
      dev += (avg - this._grade[i]) * (avg - this._grade[i]);
    }
    return dev / this._grade.length;
  }

  getStd() {
    return Math.sqrt(this.getVar());
  }
}

const ms = new Student();
ms.grade = 82;
ms.grade = 76;
ms.grade = 91;
ms.grade = 98;
ms.grade = 64;

console.log(ms._grade);
console.log(ms.getSumAvg());
console.log(ms.getMinMax());
console.log("분산: %d", ms.getVar());
console.log("표준편차: %d", ms.getStd());

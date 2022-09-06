class Student {
  constructor() {
    this.grade = [];
  }

  set input(val) {
    return this.grade.push(val);
  }

  getSumAvg() {
    let sum = this.grade.reduce((acc, cur) => acc + cur);
    let avg = sum / this.grade.length;
    return [sum, avg];
  }

  getMinMax() {
    let min = Math.min.apply(null, this.grade);
    let max = Math.max.apply(null, this.grade);
    return { 최하점: min, 최고점: max };
  }

  getVar() {
    let avg = this.getSumAvg()[1];
    let dev = 0;
    for (let i = 0; i < this.grade.length; i++) {
      dev += (avg - this.grade[i]) * (avg - this.grade[i]);
    }
    return dev / this.grade.length;
  }

  getStd() {
    return Math.sqrt(this.getVar());
  }
}

const ms = new Student();
ms.input = 82;
ms.input = 76;
ms.input = 91;
ms.input = 98;
ms.input = 64;

console.log(ms.grade);
console.log(ms.getSumAvg());
console.log(ms.getMinMax());
console.log("분산: %d", ms.getVar());
console.log("표준편차: %d", ms.getStd());

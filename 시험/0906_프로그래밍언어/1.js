const ssn = "9203211";

let yy = parseInt(ssn.substring(0, 2));
let gen = parseInt(ssn.substring(6, 7));
let sex = "";

if (gen == 1) {
  yy += 1900;
  sex = "남자";
} else if (gen == 2) {
  yy += 1900;
  sex = "여자";
} else if (gen == 3) {
  yy += 2000;
  sex = "남자";
} else if (gen == 4) {
  yy += 2000;
  sex = "여자";
}
let age = 2022 - yy + 1;
console.log("당신은 %d세 %s입니다.", age, sex);

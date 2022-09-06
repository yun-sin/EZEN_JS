import RegexHelper from "./helper/RegexHelper.js";

// 회원가입시 입력받은 값을 가정한 변수
// 사용자가 입력한 모든 내용은 문자열 변수이다.
const username = "자바스크립트";
const age = "20";
const userid = "js123";

const regex = RegexHelper.getInstance();

try {
  regex.kor(username, "이름은 한글로만 입력하세요.");
  regex.maxLength(username, 20, "이름은 최대 20글자까지만 가능합니다.");
  regex.num(age, "나이는 숫자로만 입력하세요.");
  regex.engNum(userid, "아이디는 영어와 숫자의 조합만 가능합니다.");
  regex.maxLength(userid, 20, "아이디는 최대 20글자까지만 가능합니다.");
} catch (err) {
  console.group("%s 에러 발생", err.name);
  console.error("에러코드: ", err.statusCode);
  console.error("에러내용: %s", err.message);
  console.groupEnd();
}

console.log("검사완료!!");

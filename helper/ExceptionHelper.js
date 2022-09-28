/**
 * HTTP 상태코드 (HTTP Status Code)
 * - 웹에서의 에러 상황을 의미하는 표준화된 숫자값.
 * - 400 : Bad Request Exception -> 잘못된 요청 (사용자가 지정된 형식으로 입력하지 않은 경우)
 * - 404 : Page Not Found -> 페이지를 찾을 수 없습니다. (웹 브라우저에 주소 잘못 입력 한 경우)
 * - 500 : Server Error -> 백엔드 프로그램이 겪는 Runtime Error (백엔드 개발자 잘못)
 *
 * 사용자가 입력값 형식을 지키도록 강제하는 것은 백엔드에게는 보안과 연결되는 중요한 사안이다.
 * 사용자의 입력값을 검사하여 지정된 형식이 아닐 경우 적절한 예외처리를 수행해야 한다.
 */
class BadRequestException extends Error {
  // HTTP 상태코드를 의미하는 멤버변수
  #statusCode;

  // 입력 요소에 대한 selector (추가)
  #selector;

  constructor(msg = "잘못된 요청 입니다.", selector = null) {
    super(msg);
    super.name = "BadRequestException";
    this.#statusCode = 400;
    // 멤버변수에 입력요소를 참조시킨다(추가)
    this.#selector = selector;
  }

  get statusCode() {
    return this.#statusCode;
  }

  // 입력요소에 대한 getter (추가)
  get selector() {
    return this.#selector;
  }
}

export { BadRequestException };

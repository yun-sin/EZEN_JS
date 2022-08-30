class Terran {
  #name;
  #hp;
  #dps;

  /** 모든 객체가 갖는 명사적 특성들을 멤버변수로 정의 */
  constructor(name, hp, dps) {
    this.#name = name;
    this.#hp = hp;
    this.#dps = dps;
    console.log("[%s] 체력: %d, 공격력: %d", this.name, this.hp, this.dps);
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get hp() {
    return this.#hp;
  }

  set hp(value) {
    this.#hp = value;
  }

  get dps() {
    return this.#dps;
  }

  set dps(value) {
    this.#dps = value;
  }

  /** 객체가 수행해야 하는 동작을을 함수 형태로 정의 */
  move(position) {
    console.log(this.name + "(이)가 " + position + "까지 이동합니다.");
  }

  attack(target) {
    console.log(this.name + "(이)가 " + target + "을 공격합니다. 데미지: " + this.dps);
  }
}

class Marine extends Terran {
  // attack 메서드 override
  attack(target) {
    console.log(this.name + "(이)가" + target + "에게 사격을 개시합니다. 데미지: " + this.dps);
  }
}

class Tank extends Terran {
  // attack 메서드 override
  attack(target) {
    super.attack(target);
    console.log(">>>>>> 탱크 포격");
  }
}

class Firebat extends Terran {
  // 생성자 override
  constructor(name) {
    super(name, 500, 50);
  }
}

const m = new Marine("해병", 100, 50);
m.attack("저글링");

const t = new Tank("탱크", 300, 100);
t.attack("울트라리스크");

const f = new Firebat("화염방사병", 150, 75);
f.attack("드론");

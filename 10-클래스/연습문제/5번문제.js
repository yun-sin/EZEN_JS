// 문제 5

class MyList {
  #data;
  #size;

  constructor() {
    this.#data = [];
    this.#size = 0;
  }

  get data() {
    return this.#data;
  }

  get size() {
    return this.#size;
  }

  push(val) {
    this.#data[this.data.length] = val;
    this.#size++;
    return;
  }

  // 만약 data가 =
  // 앞에있다면 : set data = ~~~ (값을 설정)
  // 뒤에있다면 : ~~~ = get data (값을 리턴받음)
  // 따라서 위에서 set을 설정안했으므로 아래에선 =앞의 data와 size는 #을 붙여야함.
  pop() {
    let x = this.data[this.data.length - 1];
    // 임시변수 tmp는 data보다 1축소된 배열
    let tmp = [];
    for (let i = 0; i < this.data.length - 1; i++) {
      tmp[i] = this.data[i];
    }

    this.#data = [];
    for (let j = 0; j < tmp.length; j++) {
      this.data[j] = tmp[j];
    }
    this.#size--;

    return x;
  }
}

//
//
const list = new MyList();

list.push(100);
list.push(200);
list.push(300);
console.log("원소의 수: %d, 데이터 확인: %s", list.size, list.data);

const x = list.pop();
console.log("추출된 데이터: %d", x);
console.log("원소의 수: %d, 데이터 확인: %s", list.size, list.data);

list.push(400);
list.push(500);
console.log("원소의 수: %d, 데이터 확인: %s", list.size, list.data);

const y = list.pop();
console.log("추출된 데이터: %d", y);
console.log("원소의 수: %d, 데이터 확인: %s", list.size, list.data);

list.push(600);
console.log("원소의 수: %d, 데이터 확인: %s", list.size, list.data);

const z = list.pop();
console.log("추출된 데이터: %d", z);
console.log("원소의 수: %d, 데이터 확인: %s", list.size, list.data);

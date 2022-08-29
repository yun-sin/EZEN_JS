function myGame(n) {
    let clap = 0;

    for (i = 1; i <= n; i++) {
        let count = "" + i;


        function f(x) {
            // 종료조건
            let now_clap = 0;
            if (x > count.length - 1) {
                console.log(count);
                return now_clap;

            } else {


                if (count[x] == 3 || count[x] == 6 || count[x] == 9) {
                    if (count[x + 1] == 3 || count[x + 1] == 6 || count[x + 1] == 9) {
                        clap += 2;
                        now_clap += 2;
                        f(x + 1);
                    } else {
                        clap++;
                        now_clap++;
                        return f(x + 1);
                    }

                } else {

                    if (count[x + 1] == 3 || count[x + 1] == 6 || count[x + 1] == 9) {
                        clap++;
                        now_clap++;
                        return f(x + 1);
                    } else {
                        return f(x + 1);

                    }
                }
            }
        }



        f(0);


        if (now_clap == 0) {
            console.log(count);
        } else {
            console.log("짝(%d) --> %d번", count, now_clap)
        }
    }

    console.log("박수를 총 %d번 쳤습니다.", clap);
}

myGame(35);
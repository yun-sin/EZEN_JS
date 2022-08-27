function myGame(n) {
    let clap = 0;

    for (i = 1; i <= n; i++) {
        let count = "" + i;
        let now_clap = 0;

        function f(x) {
            if (x > count.length - 1) {
                return now_clap;
            } else {
                if (count[x] == 3 || count[x] == 6 || count[x] == 9) {
                    clap++;
                    now_clap++;
                    return f(x + 1);
                } else {
                    return f(x + 1);
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

myGame(333);
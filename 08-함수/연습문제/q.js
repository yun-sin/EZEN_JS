let arr = [];
let sum = 0;
function myGame(n) {
    for (let i = 0; i < n; i++) {
        let clap = "";
        let cnt = 0;
        arr.push(String(i + 1));
        for (let j = 0; j < 2; j++) {
            if (arr[i][j] == "3" || arr[i][j] == "6" || arr[i][j] == "9") {
                clap += "짝";
                cnt++;
                sum++;
            }
        }
        console.log(cnt > 0 ? `${clap}(${arr[i]}) --> ${cnt}번` : arr[i]);
    }
    console.log(`박수를 총 ${sum}번 쳤습니다.`);
};
myGame(333);
const readlineSync = require('readline-sync');

// 点数を入力する
let scoreInput = readlineSync.question("点数を入力してください: ");
let score = Number(scoreInput);

// 成績の評価
if (score >= 90) {
    console.log("成績はAです。");
} else if (score >= 80) {
    console.log("成績はBです。");
} else if (score >= 70) {
    console.log("成績はCです。");
} else if (score >= 60) {
    console.log("成績はDです。");
} else {
    console.log("成績はFです。");
}

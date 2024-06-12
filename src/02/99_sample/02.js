const readlineSync = require('readline-sync');

// 3つの数値を入力する
let num1 = Number(readlineSync.question("1つ目の数値を入力してください: "));
let num2 = Number(readlineSync.question("2つ目の数値を入力してください: "));
let num3 = Number(readlineSync.question("3つ目の数値を入力してください: "));

// 最大値を判定する
let max = num1;

if (num2 > max) {
    max = num2;
}

if (num3 > max) {
    max = num3;
}

console.log(`入力された数値の中で最大のものは ${max} です。`);

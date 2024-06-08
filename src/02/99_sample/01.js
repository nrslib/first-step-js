const readlineSync = require('readline-sync');

// 数値を入力する
let numberInput = readlineSync.question("数値を入力してください: ");
let number = Number(numberInput);

// 偶数か奇数かを判定する
if (number % 2 === 0) {
    console.log("入力された数値は偶数です。");
} else {
    console.log("入力された数値は奇数です。");
}

const readlineSync = require('readline-sync');

// 合計する数値の数を入力する
let count = Number(readlineSync.question("合計する数値の数を入力してください: "));
let numbers = [];

// 数値を配列に一時的に格納する
for (let i = 0; i < count; i++) {
    let number = Number(readlineSync.question(`数値を入力してください (${i + 1}/${count}): `));
    numbers.push(number);
}

// 配列内の数値を合計する
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// 合計を表示する
console.log(`入力された数値の合計は ${sum} です。`);

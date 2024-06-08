const readlineSync = require('readline-sync');

// 入力する数値の個数を入力する
let count = Number(readlineSync.question("入力する数値の個数を入力してください: "));
let numbers = [];

// 数値を入力する
for (let i = 0; i < count; i++) {
    let number = Number(readlineSync.question(`数値を入力してください (${i + 1}/${count}): `));
    numbers.push(number);
}

// 数値を逆順に表示する
console.log("入力された数値を逆順に表示します:");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

const readlineSync = require('readline-sync');

let count = Number(readlineSync.question("合計する数値の数を入力してください: "));
let sum = 0;

// 数値を入力して合計する
for (let i = 0; i < count; i++) {
    let number = Number(readlineSync.question(`数値を入力してください (${i + 1}/${count}): `));
    sum += number;
}

// 合計を表示する
console.log(`合計は ${sum} です。`);

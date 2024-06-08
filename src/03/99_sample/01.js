const readlineSync = require('readline-sync');

// 配列のサイズを入力する
let size = Number(readlineSync.question("配列のサイズを入力してください: "));
let numbers = [];

// 配列の要素を入力する
for (let i = 0; i < size; i++) {
    let number = Number(readlineSync.question(`配列の要素を入力してください (${i + 1}/${size}): `));
    numbers.push(number);
}

// 配列内の数値の平均を計算する
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
let average = sum / numbers.length;

// 平均を表示する
console.log(`配列内の数値の平均は ${average} です。`);

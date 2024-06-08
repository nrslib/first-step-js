const readlineSync = require('readline-sync');

// 年を入力する
let yearInput = readlineSync.question("年を入力してください: ");
let year = Number(yearInput);

// うるう年かどうかを判定する
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year}年はうるう年です。`);
} else {
    console.log(`${year}年はうるう年ではありません。`);
}

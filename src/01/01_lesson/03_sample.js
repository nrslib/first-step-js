// 名前と年齢を入力するプログラムを作りましょう

const readlineSync = require('readline-sync');

// ユーザーの名前を入力する
let userName = readlineSync.question("あなたの名前を入力してください: ");

// ユーザーの年齢を入力する
let ageInput = readlineSync.question("あなたの年齢を入力してください: ");
let age = Number(ageInput);

// 来年の年齢を計算する
let nextYearAge = age + 1;

// 結果を表示する
console.log(`${userName}さん、あなたは来年 ${nextYearAge} 歳になります。`);

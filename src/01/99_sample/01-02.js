const readlineSync = require('readline-sync');

// 元本を入力する
let principalInput = readlineSync.question("元本（初期投資額）を入力してください: ");
let principal = Number(principalInput);

// 利率を入力する
let rateInput = readlineSync.question("年利率（%）を入力してください: ");
let rate = Number(rateInput);

// 期間を入力する
let timeInput = readlineSync.question("投資期間（年）を入力してください: ");
let time = Number(timeInput);

// 単利を計算する
let interest = principal * rate * time / 100;

// 最終的な金額を計算する
let totalAmount = principal + interest;

// 結果を表示する
console.log(`利息は ${interest.toFixed(2)} 円です。`);
console.log(`最終的な金額は ${totalAmount.toFixed(2)} 円です。`);

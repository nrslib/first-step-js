const readlineSync = require('readline-sync');

// 合計金額を入力する
let totalAmountInput = readlineSync.question("合計金額を入力してください: ");
let totalAmount = Number(totalAmountInput);

// 参加人数を入力する
let numberOfPeopleInput = readlineSync.question("参加人数を入力してください: ");
let numberOfPeople = Number(numberOfPeopleInput);

// 一人あたりの支払い金額を計算する
let share = totalAmount / numberOfPeople;

// 結果を表示する
console.log(`一人あたりの支払い金額は ${share} 円です。`);

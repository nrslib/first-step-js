const readlineSync = require('readline-sync');

// 温度変換プログラム
let celsius = parseFloat(readlineSync.question("摂氏温度を入力してください: "));
let fahrenheit = celsius * 9 / 5 + 32;
console.log(`${celsius}度Cは${fahrenheit}度Fです。`);

// 単位変換プログラム
let meters = parseFloat(readlineSync.question("メートルの値を入力してください: "));
let kilometers = meters / 1000;
console.log(`${meters}メートルは${kilometers}キロメートルです。`);

// 割り勘計算プログラム
let totalAmount = parseInt(readlineSync.question("合計金額を入力してください: "));
let numberOfPeople = parseInt(readlineSync.question("人数を入力してください: "));
let share = totalAmount / numberOfPeople;
console.log(`一人あたりの支払い金額は${share.toFixed(2)}円です。`);

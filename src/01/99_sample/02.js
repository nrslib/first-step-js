const readlineSync = require('readline-sync');

// 月給（基本給）を入力する
let monthlySalaryInput = readlineSync.question("月給を入力してください: ");
let monthlySalary = Number(monthlySalaryInput);

// ボーナスは何か月分ですか？
let bonusMonthsInput = readlineSync.question("ボーナスは何か月分ですか？: ");
let bonusMonths = Number(bonusMonthsInput);

// 年間ボーナスを計算する
let annualBonus = monthlySalary * bonusMonths;

// 年収を計算する
let annualSalary = (monthlySalary * 12) + annualBonus;

// 結果を表示する
console.log(`あなたの年間ボーナスは ${annualBonus} 円です。`);
console.log(`あなたの年収は ${annualSalary} 円です。`);

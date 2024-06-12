// 月給（基本給）を入力する
let monthlySalary = 300000;

// ボーナスは何か月分ですか？
let bonusMonths = 5.5;

// 年間ボーナスを計算する
let annualBonus = monthlySalary * bonusMonths;

// 年収を計算する
let annualSalary = (monthlySalary * 12) + annualBonus;

// 結果を表示する
console.log(`あなたの年間ボーナスは ${annualBonus} 円です。`);
console.log(`あなたの年収は ${annualSalary} 円です。`);

// 元本
let principal = 1000000;
// 利率（パーセント）
let rate = 2;
// 期間（年）
let time = 35;

// 単利を計算する
let interest = principal * rate * time / 100;

// 最終的な金額を計算する
let totalAmount = principal + interest;

// 結果を表示する
console.log(`利息は ${interest.toFixed(2)} 円です。`);
console.log(`最終的な金額は ${totalAmount.toFixed(2)} 円です。`);

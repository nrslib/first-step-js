// Expenseオブジェクトを作成する
const expenses = [
    { item: "食費", amount: 5000 },
    { item: "交通費", amount: 3000 },
    { item: "娯楽費", amount: 2000 }
];

// 合計金額を計算する関数
function calculateTotalExpenses(expenses) {
    let total = 0;
    for (let expense of expenses) {
        total += expense.amount;
    }
    return total;
}

// 合計金額を表示する
let totalExpenses = calculateTotalExpenses(expenses);
console.log(`合計支出金額は: ${totalExpenses} 円です。`);

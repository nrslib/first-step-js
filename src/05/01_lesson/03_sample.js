// 商品の配列
const products = [
    { name: "りんご", price: 100 },
    { name: "バナナ", price: 150 },
    { name: "オレンジ", price: 200 }
];

// 合計金額を計算する関数
function calculateTotalPrice(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    return total;
}

// 合計金額を表示する
let totalPrice = calculateTotalPrice(products);
console.log(`合計金額は ${totalPrice} 円です。`);

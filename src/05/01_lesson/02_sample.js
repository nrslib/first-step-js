// 商品の配列
const products = [
    { name: "りんご", price: 100 },
    { name: "バナナ", price: 150 },
    { name: "オレンジ", price: 200 }
];

// 商品の詳細を表示する関数
function displayProductDetails(products) {
    products.forEach(product => {
        console.log(`商品名: ${product.name}, 価格: ${product.price} 円`);
    });
}

// 商品の詳細を表示する
displayProductDetails(products);

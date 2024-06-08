// 商品の詳細を変数に入れる
let apple = { name: "りんご", price: 100 };
let banana = { name: "バナナ", price: 150 };
let orange = { name: "オレンジ", price: 200 };

// 商品の詳細を表示する関数
function displayProductDetails(product) {
    console.log(`商品名: ${product.name}, 価格: ${product.price} 円`);
}

// 各商品の詳細を表示する
displayProductDetails(apple);
displayProductDetails(banana);
displayProductDetails(orange);

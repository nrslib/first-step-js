// Bookオブジェクトを作成する
const books = [
    { title: "JavaScript入門", author: "山田太郎", price: 2000 },
    { title: "Node.jsの基礎", author: "田中花子", price: 2500 },
    { title: "Reactの実践", author: "佐藤次郎", price: 3000 }
];

// 本の詳細を表示する関数
function displayBookDetails(books) {
    books.forEach(book => {
        console.log(`タイトル: ${book.title}, 著者: ${book.author}, 価格: ${book.price} 円`);
    });
}

// 本の詳細を表示する
displayBookDetails(books);


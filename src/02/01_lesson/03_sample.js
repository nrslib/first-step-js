const readlineSync = require('readline-sync');

// 気温を入力する
let temperatureInput = readlineSync.question("気温を摂氏で入力してください: ");
let temperature = Number(temperatureInput);

// 気温が快適かどうかを判定する
if (temperature >= 20 && temperature <= 25) {
    console.log("気温は快適です。");
} else {
    console.log("気温は快適ではありません。");
}

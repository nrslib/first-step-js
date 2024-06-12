const readlineSync = require('readline-sync');

// 天気を入力する
let weather = readlineSync.question("天気は晴れですか？（yes/no）: ").toLowerCase();

// 気温を入力する
let temperatureInput = readlineSync.question("気温を摂氏で入力してください: ");
let temperature = Number(temperatureInput);

// 外出するかどうかを判定する
if ((weather === 'yes' && temperature >= 20 && temperature <= 30) || (weather === 'no' && temperature >= 25 && temperature <= 35)) {
    console.log("外出するのに良い天気です。");
} else {
    console.log("外出するのは控えた方が良いでしょう。");
}

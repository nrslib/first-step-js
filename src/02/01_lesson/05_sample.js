// 晴れかどうか（yes / no）
let sunny = "yes";

// 気温
let temperature = 30;

// 外出するかどうかを判定する
if ((sunny === 'yes' && temperature >= 20 && temperature <= 30) || (sunny === 'no' && temperature >= 25 && temperature <= 35)) {
    console.log("外出するのに良い天気です。");
} else {
    console.log("外出するのは控えた方が良いでしょう。");
}

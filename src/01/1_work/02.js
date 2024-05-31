const readlineSync = require('readline-sync');

// 身長を入力する
let height = parseFloat(readlineSync.question("身長をメートルで入力してください（例: 1.75）: "));

// 体重を入力する
let weight = parseFloat(readlineSync.question("体重をキログラムで入力してください（例: 68）: "));

// BMIを計算する
let bmi = weight / (height * height);
console.log(`あなたのBMIは ${bmi.toFixed(2)} です。`);

const readlineSync = require('readline-sync');

// 週末かどうかを入力する
let isWeekend = readlineSync.question("今日は週末ですか？（yes/no）: ").toLowerCase() === 'yes';

// 祝日かどうかを入力する
let isHoliday = readlineSync.question("今日は祝日ですか？（yes/no）: ").toLowerCase() === 'yes';

// 休みかどうかを判定する
if (isWeekend || isHoliday) {
    console.log("今日は休みです。");
} else {
    console.log("今日は平日です。");
}

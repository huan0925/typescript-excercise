// Boolean
var isDone = false;
// Number
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二進位制表示法
var binaryLiteral = 10;
// ES6 中的八進位制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity; // 正無限大
// String
var myName1 = 'Tom';
var myAge = 25;
// 範本字串
var sentence = "Hello, my name is ".concat(myName1, ".\nI'll be ").concat(myAge + 1, " years old next month.");
// 用 void 創建一個不會有回傳值的 function
function alertName() {
    alert('My name is Tom');
}
// 創建一個變數也可不定義任何型別，代表該變數可以是 any type
var value = null; // 型別推斷為 `any`
value = 42; // 合法
value = "hello"; // 合法
console.log(value); // 輸出: "hello"

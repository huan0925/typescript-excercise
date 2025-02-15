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
// let value = null -> 也可代表定義為 `any` 型別，也不會編譯錯誤
var value = null; // 明確定義為 `any` 型別
value = 42; // 合法
value = "hello"; // 合法
console.log(value); // 輸出: "hello"
// 可以在定義該變數的 type 時就先定義該變數有可能的 data type。以下範例就說明 value1 可以是 number / null type
var value1 = null; // 可以是數字或 null
value1 = 42; // 合法
value1 = null; // 合法
// value1 = 'Hello' -> 會報錯： Type 'string' is not assignable to type 'number'.
console.log(value); // 輸出: null

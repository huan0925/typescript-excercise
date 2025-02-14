// Boolean
let isDone: boolean = false;

// Number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二進位制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八進位制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity; // 正無限大

// String
let myName1: string = 'Tom';
let myAge: number = 25;

// 範本字串
let sentence: string = `Hello, my name is ${myName1}.
I'll be ${myAge + 1} years old next month.`;

// 用 void 創建一個不會有回傳值的 function
function alertName(): void {
    alert('My name is Tom');
}
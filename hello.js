// name: string -> name is string type;
// function sayHello(name: string): string -> the response is string type 
function sayHello(name) {
    return "Hello, ".concat(name, "!");
}
// output
var myName = "Arlo";
console.log(sayHello(myName));

// name: string -> name is string type;
// function sayHello(name: string): string -> the response is string type 
function sayHello(name: string): string {
    return `Hello, ${name}!`;
}

// output
const myName: string = "Arlo";
console.log(sayHello(myName));
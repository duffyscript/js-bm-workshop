/*var foo = "foo1";
var foo = "foo2";

let bar = "bar1";
let bar = "bar2"; // error*/

if (true) {
    var foo = 'first';
    let bar = 'second';
    const baz = 'third';
}

console.log(foo); // 'first';
console.log(bar); // error
console.log(baz); // error
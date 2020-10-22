function *generator() {
    yield "one"
    yield "two"
    yield "trhee"
}

let it = generator();

it.next();

console.log(it.next());
console.log("log");

console.info("info");
console.debug("debug");
console.warn("warn");
console.error("error");

console.log("log", "abc");

let isWorking = true;
console.assert(isWorking,"conditional error");

for(i=0; i<10; i++) {
    console.count();
}

console.time();
setTimeout(() => {
    console.timeEnd();
}, 2000);

function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.trace();
}

one();

let devices = [
    {
        name: 'iPhone',
        brand: 'Apple'
    },
    {
        name: 'Galaxy',
        brand: 'Samsung'
    }
]
console.log(devices);
console.table(devices);


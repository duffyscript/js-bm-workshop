function f(callback) {
    setTimeout(() => callback(), 3000);
}

f(() => console.log("complete"));

/*let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 3000)
});*/

// promise.then(() => console.log("complete")).catch(() => console.log("error"));

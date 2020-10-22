function f(callback) {
    setTimeout(() => callback(), 3000);
}

f(() => console.log("complete"));

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise;

    if (result) {

    }

    console.log(result);
}

f();

fetch('movies.json')
    .then(response => response.json())
    .then(data => console.log(data));

async function fetchMoviesJSON() {
    const response = await fetch('movies.json');
    const movies = await response.json();

    return movies;
}

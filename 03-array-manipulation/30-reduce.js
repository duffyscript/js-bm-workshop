let cars = [
    {
        name: 'Audi',
        speed: 250
    },
    {
        name: 'BMW',
        speed: 280
    },
    {
        name: 'Škoda',
        speed: 150
    }
];

let result = cars.reduce((prev, current) => prev + current.speed, 0);

console.log(result);
let cars = ['Volvo', 'Škoda', 'BMW', 'Audi', 'Porsche'];

cars = cars.map(function (car, index) {
    return (index + 1) + ". " + car;
});

cars = cars.map((car, index) => (index + 1) + ". " + car);

console.log(cars);
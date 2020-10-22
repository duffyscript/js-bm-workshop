let cars = ['Volvo', 'Škoda', 'BMW', 'Audi', 'Porsche'];

/*cars = cars.filter(function (car) {
    return car.length > 4;
});*/

cars = cars.filter((car) => car.length > 4);

console.log(cars);
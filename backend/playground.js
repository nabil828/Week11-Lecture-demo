fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

result = fruits.filter(
  (x) => { return x == "cherry" }
)

console.log(result);


// array of car objects

cars = [{
  make: 'Toyota',
  model: 'Corolla',
  year: 2018
}, {
  make: 'Toyota',
  model: 'Camry',
  year: 2019
}, {
  make: 'Honda',
  model: 'Civic',
  year: 2017
}, {
  make: 'Honda',
  model: 'Accord',
  year: 2018
}]


console.log(cars.filter((x) => x.make == 'Toyota'))
console.log(cars.filter((x) => x.make == 'Toyota').map(y => y.year))
console.log(cars.find((x) => x.make == 'Toyota'))
console.log(cars.map((x) => x.make))

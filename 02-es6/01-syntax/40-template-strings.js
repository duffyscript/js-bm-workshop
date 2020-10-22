var name = {
  first: 'Tomáš',
  last: 'Duffek'
};

console.log('Hello, my name is ' + name.first + ' ' + name.last + '.');

console.log(`Hello, my name is ${name.first} ${name.last}.`);

var full_name = ['Tomáš', 'Duffek'];
console.log(`Hello, my name is ${full_name.reverse().join(' ')}.`);

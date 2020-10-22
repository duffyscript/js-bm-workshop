class Person {

  constructor (name) {
    this.name = name;
  }

  getGreeting () {
    return 'Hi';
  }

  greet () {
    console.log(this.getGreeting() + ', ' + this.name + '.');
  }

}

class Pirate extends Person {

  getGreeting () {
    return 'Arrr';
  }


}


var me = new Person('Tomáš Duffek');
me.greet();

var john = new Pirate('John Long Silver');
john.greet();
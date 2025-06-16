
class Animal {
  constructor(name) {
    this.name = name; 
  }

  speak() {
    console.log(`${this.name} is making a sound.`);
  }
}

const dog = new Animal("Dog");

dog.speak(); 

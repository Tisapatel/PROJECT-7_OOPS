class Animal {
  eat() {
    console.log("Animal eats");
  }
}

class Mammal extends Animal {
  walk() {
    console.log("Mammal walks");
  }
}

class Dog extends Mammal {
  bark() {
    console.log("Dog barks");
  }
}

const dog = new Dog();
dog.eat(); 
dog.walk();
dog.bark(); 

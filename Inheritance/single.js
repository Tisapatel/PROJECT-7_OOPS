class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {}

const d = new Dog();
d.speak();

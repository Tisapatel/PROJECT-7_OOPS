
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }


    speak() {
        console.log(`${this.name} says "${this.sound}"`);
    }
}


const dog = new Animal("Dog", "Bark");
const cat = new Animal("Cat", "Meow");
const cow = new Animal("Cow", "Moo");
const lion = new Animal("Lion", "Roar");


dog.speak();
cat.speak();
cow.speak();
lion.speak();  

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

class Admin extends User {
  constructor(name, role) {
    super(name); // parent constructor
    this.role = role;
  }

  showRole() {
    return `Role: ${this.role}`;
  }
}

const a = new Admin("Tisa", "RNW student");
console.log(a.greet());     
console.log(a.showRole());  

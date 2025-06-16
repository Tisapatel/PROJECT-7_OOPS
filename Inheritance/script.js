
class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getDetails() {
    return `Name: ${this.name}\nEmail: ${this.email}`;
  }
}


class Student extends Person {
  constructor(name, email, studentId, course) {
    super(name, email);
    this.studentId = studentId;
    this.course = course;
  }

  getDetails() {
    return `${super.getDetails()}\nType: Student\nStudent ID: ${this.studentId}\nCourse: ${this.course}`;
  }
}


class Employee extends Person {
  constructor(name, email, empId, department) {
    super(name, email);
    this.empId = empId;
    this.department = department;
  }

  getDetails() {
    return `${super.getDetails()}\nType: Employee\nEmployee ID: ${this.empId}\nDepartment: ${this.department}`;
  }
}


const people = [
  new Student("Tisu", "tisa@gmail.com", "ST001", "Bv"),
  new Employee("pari", "pari@gmail.com", "EMP001", "Development"),
  new Student("chandni", "chandni@gmail.com", "ST002", "MBA"),
  new Employee("isha", "isha@gmail.com", "EMP002", "HR"),
  new Student("Rahul", "rahul@college.com", "ST003", "B.Tech")
];


people.forEach((person, index) => {
  console.log(`Person ${index + 1}:\n${person.getDetails()}\n----------------------`);
});

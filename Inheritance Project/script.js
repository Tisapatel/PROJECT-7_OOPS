
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }

  class Employee extends Person {
    constructor(name, email, designation, department, joiningDate) {
      super(name, email);
      this.designation = designation;
      this.department = department;
      this.joiningDate = joiningDate;
    }
  }

  document.querySelector("#employeeModal form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const designation = this.querySelectorAll('select')[0].value;
    const department = this.querySelectorAll('select')[1].value;
    const joiningDate = this.querySelector('input[type="date"]').value;

    const newEmployee = new Employee(name, email, designation, department, joiningDate);

    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));

    alert("✅ Employee added successfully!");
    this.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('employeeModal'));
    modal.hide();
  });

  const ctx = document.getElementById('departmentChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Engineering', 'Support', 'Marketing', 'HR', 'Finance', 'Sales'],
      datasets: [
        {
          label: 'Manager-Employee Relationship Score',
          data: [3.5, 2.8, 4.2, 3.9, 3.1, 2.7],
          backgroundColor: '#3b82f6'
        },
        {
          label: 'Work-Life Balance Score',
          data: [3.9, 4.1, 4.4, 3.7, 3.2, 4.6],
          backgroundColor: '#06b6d4'
        }
      ]
    },
    options: {
      responsive: true,
      indexAxis: 'y',
      scales: {
        x: {
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1
          },
          title: {
            display: true,
            text: 'Rating'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Departments'
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: 'white'
          }
        }
      }
    }
  });






 
//  Abstraction means hiding complex details and showing only the essential parts of an object.

class BankAccount {
    #balance = 0; // private

    constructor(owner) {
        this.owner = owner;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return `₹${this.#balance}`; // abstraction: internal balance logic hidden
    }
}

const userAccount = new BankAccount("Gwen");
userAccount.deposit(1000);
console.log(userAccount.getBalance()); // ₹1000

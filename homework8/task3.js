// Задача 3.

// Дефинирајте класа на банкарска сметка(BankAccount) со следните атрибути и методи:

// Атрибути: accountNumber, accountHolder, balance
// Методи: deposit(amount), withdraw(amount), getBalance()
// Спроведете валидација во методот на повлекување(withdraw) за да се осигурате дека износот за повлекување не го надминува тековното салдо(balance).

// Креирајте два примероци од класата BankAccount и извршете некои трансакции (депозити и повлекувања).

class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount
            console.log(`Deposit of $${amount} successful for ${this.accountHolder}. New balance: $${this.balance}`)
        } else {
            console.log(`Error: Invalid deposit amount for ${this.accountHolder}.`)
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log(`Error: Invalid withdrawal amount for ${this.accountHolder}.`)
        } else if (amount > this.balance) {
            console.log(`Error: Insufficient funds for ${this.accountHolder}.`)
        } else {
            this.balance -= amount
            console.log(`Withdrawal of $${amount} successful for ${this.accountHolder}. New balance: $${this.balance}`)
        }
    }

    getBalance() {
        console.log(`Current balance for ${this.accountHolder}: $${this.balance}`)
    }
}


const account1 = new BankAccount(1322323255, "Jovan Jovanoski", 53555)
const account2 = new BankAccount(2233049495, "Iva Ivanoska", 13254)

account1.deposit(100)
account2.deposit(20)
account1.withdraw(50)
account2.withdraw(4000000)
account1.getBalance()
account2.getBalance()



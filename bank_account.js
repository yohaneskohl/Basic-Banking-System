class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > 0) {
                    this.balance += amount;
                    resolve(`Deposit of Rp. ${amount.toLocaleString('id-ID')} successful. Current balance: Rp. ${this.balance.toLocaleString('id-ID')}`);
                } else {
                    reject("Invalid deposit amount. Please enter a positive number.");
                }
            }, 2000); // Simulating asynchronous operation
        });
    }

    withdraw(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > 0 && this.balance >= amount) {
                    this.balance -= amount;
                    resolve(`Withdrawal of Rp. ${amount.toLocaleString('id-ID')} successful. Current balance: Rp. ${this.balance.toLocaleString('id-ID')}`);
                } else if (amount <= 0) {
                    reject("Invalid withdrawal amount. Please enter a positive number.");
                } else {
                    reject("Insufficient funds for withdrawal.");
                }
            }, 2000); 
        });
    }
}

// Example usage:
const account = new BankAccount(1000000); // Initial balance of Rp. 1,000,000

async function performTransactions() {
    try {
        console.log(await account.deposit(500000)); 
        console.log(await account.withdraw(200000)); 
        console.log(await account.withdraw(2000000)); 
    } catch (error) {
        console.error(error);
    }
}

performTransactions();

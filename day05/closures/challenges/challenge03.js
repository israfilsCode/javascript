function createBankAccount() {
    let balance = 0;

    const account = {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            if (balance < amount) {
                console.log("Insufficient balance");
                return;
            }
            balance -= amount;
        },
        getBalance() {
            return balance;
        }
    };

    return account;
}

const account = createBankAccount();

account.deposit(100);
account.deposit(50);

console.log(account.getBalance()); // 150

account.withdraw(30);
account.withdraw(120);
console.log(account.getBalance());
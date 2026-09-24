// Inside createBankAccount():

// balance should start at 0
// deposit(amount) increases the balance
// withdraw(amount) decreases the balance
// getBalance() returns the balance

function createBankAccount() {
    let balance = 0;

    const account = {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            balance -= amount
        },
        getBalance() {
            return balance;
        }
    }

    return account;
}

const account = createBankAccount();

account.deposit(100);
account.deposit(50);

console.log(account.getBalance()); // 150

account.withdraw(30);

console.log(account.getBalance()); // 120


console.log(account.balance); // undefined
// would give: undefined

// But these methods can access it:

// account.deposit()
// account.withdraw()
// account.getBalance()

// because they form closures over balance.

// Think of it as:

// createBankAccount()
//        │
//        ├── balance = 0  🔒 private
//        │
//        ├── deposit() ──────┐
//        ├── withdraw() ────┼──→ can access balance
//        └── getBalance() ──┘

// This is a very important JavaScript pattern.
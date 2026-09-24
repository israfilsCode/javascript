// 🔐 Now: Closures as private state
// Here's a very practical example.

function createBankAccount() {
    let balance = 0;

    return {
        deposite(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    }
}

const account = createBankAccount();

account.deposite(100);
account.deposite(50);

console.log(account.getBalance()); // 150;
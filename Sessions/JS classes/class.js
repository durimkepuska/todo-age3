class Bank {
    accountNumber;
    bilance = 0;
    transaction;

    deposit(value) {
        if(value < 0){
            console.error("Vetem depozita pozitive")
            return
        }
        this.bilance = this.bilance + value
    }

    credit() {

    }

    transfer() {

    }
}

const bank = new Bank();
bank.deposit(-50);
bank.deposit(-500);
bank.deposit(50);
bank.deposit(-50);
console.log(bank.bilance)

class Bank {
    #accountNumber;
    #bilance = 0;
    #transaction;

    #pin = 8888;
    #clientAccountNumber = 123456789;
    #loggedIn = false;

    kyqu(id, pin) {
        if (id === this.#clientAccountNumber && this.#pin === pin) {
            this.#loggedIn = true;
            console.log('success')
        } else {
            console.error("Login failed")
        }
    }

    deposit(value) {
        if (this.#loggedIn) {
            if (value < 0) {
                console.error("Vetem depozita pozitive")
                return
            }
            this.#bilance = this.#bilance + value
        } else {
            console.error("Login failed")
        }
    }

    credit(value) {
        if (this.#loggedIn) {
            if (value > this.#bilance) {
                console.error("Nuk keni fonde te mjaftueshme");
                return;
            }
            this.#bilance = this.#bilance - value;
        } else {
            console.error("Login failed")
        }
    }

    transfer(id, value) {
        if (this.#loggedIn) {
            this.credit(value);
        } else {
            console.error("Login failed")
        }

    }

    showBilance() {
        return this.#bilance
    }
}

const bank = new Bank();
bank.kyqu(123456789, 8888)

bank.deposit(5000);
bank.credit(500)
bank.transfer("56465465465465", 500)

console.log('bilanci i juaj', bank.showBilance())

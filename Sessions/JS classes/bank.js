class Bank {
    #bilance = 5000;

    #pin = 8888;
    #clientAccountNumber = 123456789;

    #loggedIn = false;

    constructor(pin, id) {
        if (+id === this.#clientAccountNumber && this.#pin === +pin) {
            this.#loggedIn = true;
            console.log('LoggedIn')
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

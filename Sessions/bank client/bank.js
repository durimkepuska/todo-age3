class Bank {
    #bilance = 5000;

    logout() {
    }

    deposit(value) {

        if (value < 0) {
            console.error("Vetem depozita pozitive")
            return
        }
        this.#bilance = this.#bilance + value
    }

    credit(value) {

        if (value > this.#bilance) {
            console.error("Nuk keni fonde te mjaftueshme");
            return;
        }
        this.#bilance = this.#bilance - value;

    }

    transfer(id, value) {

        this.credit(value);


    }

    showBilance() {

        return this.#bilance

    }
}


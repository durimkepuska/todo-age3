class Bank {
    #bilance = 5000;

    logout() {
    }

    deposit(value) {
        if (value < 0) {
            console.error("Vetem depozita pozitive")
            return
        }

        fetch('http://localhost:8080/deposit', {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({depositValue: value})
        }).then(response => response.json()).then(json => {
            this.showBilance()
        })

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
        fetch("http://localhost:8080/bilance").then(response => response.json()).then(json => {
            document.getElementById("bilance").innerText = json.bilance;
        });
    }
}


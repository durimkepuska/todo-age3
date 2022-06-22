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
        fetch('http://localhost:8080/credit', {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({creditValue: value})
        }).then(response => response.json()).then(json => {
            this.showBilance()
        })
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


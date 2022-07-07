class Bank {
    #bilance = 5000;

    logout() {
        fetch('http://localhost:8080/logout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(response => response.json()).then(json => {
            window.localStorage.removeItem("loggedIn")
            window.localStorage.removeItem("userId")
            window.localStorage.removeItem("token")
        })
    }

    deposit(value) {
        if (value < 0) {
            console.error("Vetem depozita pozitive")
            return
        }

        fetch('http://localhost:8080/deposit/' + localStorage.getItem("userId"), {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({depositValue: value})
        }).then(response => response.json()).then(json => {
            this.showBilance()
        })

    }

    credit(value) {
        if (value < 0) {
            console.error("Vetem depozita pozitive")
            return
        }
        fetch('http://localhost:8080/credit/' + localStorage.getItem("userId"),{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
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
        fetch("http://localhost:8080/bilance/" + localStorage.getItem("userId"),{
            headers:{
                'Authorization': localStorage.getItem('token')
            }
        }).then(response => response.json()).then(json => {
            document.getElementById("bilance").innerText = json.bilance;
        });
    }
}


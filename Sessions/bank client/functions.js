let bank;

function login() {

    const accountId = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;

    fetch('http://localhost:8080/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({accountNumber: accountId, pin: pin})
    }).then(response => response.json()).then(json => {
        if (json.loggedIn) {
            window.localStorage.setItem("loggedIn", true)
            window.localStorage.setItem("userId", json.userId)
            initBank();
        } else {
            alert('wrong user and pass')
        }
    })


}

function initBank(){
    bank = new Bank();
    updateBilance()
    document.querySelector(".options").style.display = 'none'
    if (document.querySelector(".options").style.display === 'none') {
        document.querySelector(".options").style.display = 'flex';
        document.querySelector(".login-box").style.display = 'none';
    } else {
        document.querySelector(".options").style.display = 'none';
    }
}
function deposit() {
    const value = document.getElementById("deposit-value").value;
    bank.deposit(+value);
}

function updateBilance() {
    bank.showBilance()
    document.getElementById("bilance").style = `  color: white;
    text-align: center;
    padding: 1px;
    font-size: 60px;
    border-bottom: 1px solid #0008f5;
    margin-bottom: 35px;
    width: 40%;
    transition: 0.9s`
}

function credit() {
    const value = document.getElementById("transfer-value").value;
    bank.credit(+value);
    updateBilance()
}

function logout() {
    bank.logout();
    document.getElementById("bilance").innerText = '';
    document.getElementById("bilance").style.border = 'none';
    document.querySelector(".options").style.display = 'none';
    document.querySelector(".login-box").style.display = 'block';


}
const loggedIn = window.localStorage.getItem("loggedIn")
if(loggedIn != null && loggedIn === 'true'){
    initBank();
}

// let login = document.querySelector('.login-box');
// let dashboard = document.querySelector('.options');
// if(){
//     document.querySelector('.login-box');

// }

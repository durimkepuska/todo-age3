let bank;

function login() {
    const accountId = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
    bank = new Bank(pin, accountId);
    updateBilance()
}

function getMoney() {
    const value = document.getElementById("deposit-value").value;
    bank.deposit(+value);
    updateBilance()
}

function updateBilance() {
    document.getElementById("bilance").innerText = bank.showBilance()
}

function sendMoney(){
    const value = document.getElementById("transfer-value").value;
    bank.credit(+value);
    updateBilance()
}
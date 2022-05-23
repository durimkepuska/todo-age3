let bank;

function login() {

    const accountId = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
    bank = new Bank(pin, accountId);
    updateBilance()    
    // document.querySelector('.login-box').style.display = 'none';
    // document.querySelector('.options').style.display = 'flex';
    let logOn = document.querySelector(".login-box");
    let logOff = document.querySelector(".options");

    if (document.querySelector(".options").style.display === 'none') {
        document.querySelector(".login-box").style.display = 'none';
        document.querySelector(".options").style.display = 'flex';
    } 
    else {
        document.querySelector(".options").style.display = 'none';
    }
    
}

function getMoney() {
    const value = document.getElementById("deposit-value").value;
    bank.deposit(+value);
    updateBilance()
}

function updateBilance() {
    document.getElementById("bilance").innerText = bank.showBilance()
    document.getElementById("bilance").style = `  color: white;
    text-align: center;
    padding: 1px;
    font-size: 60px;
    border-bottom: 1px solid #0008f5;
    margin-bottom: 35px;
    width: 40%;`
}

function sendMoney() {
    const value = document.getElementById("transfer-value").value;
    bank.credit(+value);
    updateBilance()
}

function logout(){
    bank.logout();
    document.getElementById("bilance").innerText = '';
    document.getElementById("bilance").style.border ='none';
    document.querySelector(".options").style.display = 'none';
    document.querySelector(".login-box").style.display ='block';
    

}

// let login = document.querySelector('.login-box');
// let dashboard = document.querySelector('.options');
// if(){
//     document.querySelector('.login-box');
    
// }
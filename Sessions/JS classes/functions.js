let bank;

function login() {

    const accountId = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
    bank = new Bank(pin, accountId);
    updateBilance()    
     if (document.querySelector(".options").style.display === 'none') {
         document.querySelector(".options").style.display = 'flex';
         document.querySelector(".login-box").style.display = 'none';
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
    width: 40%;
    transition: 0.9s`
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
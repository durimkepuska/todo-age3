function sendGetRequest() {
    const name = document.getElementById("name").value;
    const response = fetch("https://api.genderize.io?name=" + name);
    response.then(res => res.json()).then(data => {
        document.getElementById("gender").innerText = data.gender;
        document.getElementById("percentage").innerText = data.probability;
    });

}


//https://api.genderize.io?name=hasan
//https://api.agify.io/?name=eden
//https://api.nationalize.io/?name=michael

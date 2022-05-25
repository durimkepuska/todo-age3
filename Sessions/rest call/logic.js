function checkGender() {
    document.getElementById("gender").innerText = '';
    document.getElementById("percentage").innerText = '';
    document.getElementById("age").innerText = '';

    const name = document.getElementById("name").value;
    const response = fetch("https://api.genderize.io?name=" + name);
    response.then(res => res.json()).then(data => {
        document.getElementById("gender").innerText = data.gender;
        document.getElementById("percentage").innerText = data.probability;
        if (data.gender === 'male') checkAge()
    });
}

function checkAge() {
    const name = document.getElementById("name").value;
    const response = fetch("https://api.agify.io/?name=" + name);
    response.then(res => res.json()).then(data => {
        document.getElementById("age").innerText = data.age;
    });

}

function checkNationality(){
    //1. get input name
    //1. get request me emrin qe e kemi shkruar
    //3. prite rezultatin dhe hyre ne loop ne vektorin country
    //4. shkruaj ne html secilin country dhe perqindjen me radhe
}

//https://api.genderize.io?name=hasan
//https://api.agify.io/?name=eden
//https://api.nationalize.io/?name=michael

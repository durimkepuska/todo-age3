function sendGetRequest() {
    const name = document.getElementById("name").value;
    const response = fetch("https://api.genderize.io?name=" + name);
    response.then(res => res.json()).then(data => {
        console.log(data)
    });

}


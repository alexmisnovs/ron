var jokeDiv = document.getElementById('joke');

const generateJoke = () => {
    fetch("https://api.icndb.com/jokes/random?firstName=Ron&lastName=Bearningsworth&limitTo=[explicit]")
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
            // Create and append the li's to the ul
            jokeDiv.innerHTML = `<p>${data.value.joke}</p>`
            console.log(data.value.joke);
        })
}


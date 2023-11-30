let loginForm = document.getElementById("loginForm");

const numberOfDogs = 10

async function getDogsInfo() {
    try {
        const response = await fetch(`https://api.thedogapi.com/v1/breeds?limit=${numberOfDogs}`, {
            method: "GET",
            headers: {
                "x-api-key": "live_lWvmtEurGGkiDbuhzBhBgPfe4Snq0vqj7nQL2bx3CXfxcYVEMPZHGWnbIa3cYy7F"
            }
        })
        const data = await response.json()
        console.log(data)
        return data
    } catch (err) {
        console.log(err);
    }
}

async function renderKnowledgePanel() {
    const dogsInfo = await getDogsInfo()
    console.log(`doginfo is `)
    console.log(dogsInfo)

    let knowledgeBlocks = []
    for (let i = 0; i < 9; i++) {
        let newBlock = `<div class="knowledgeBlock">
        <img class = "knowledgeBlockImage" src = "${dogsInfo[i].image.url}" alt = "Hedgehog's missing" >
        <h3>${dogsInfo[i].name}</h3>
        <p>${dogsInfo[i].temperament}</p>
        </div>`
        knowledgeBlocks.push(newBlock)
    }
    document.getElementById("knowledgePanel").innerHTML = knowledgeBlocks.join("")
}

function updateUI() {
    if (sessionStorage.getItem("authorizationKey") !== null) {
        document.getElementById("auth").remove()
        document.getElementById("signButton").remove()
        document.getElementById("mainButton").className = "highlightedPageButton"
    } else {
        document.getElementById("signButton").className = "highlightedPageButton"
        document.getElementById("mainButton").remove()
        document.getElementById("knowledge").remove()
        document.getElementById("pagination").remove()
    }
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById('username');
    let password = document.getElementById('password');

    if (username.value === "" || password.value === "") {

        //throw input borders in red
        username.className = `${username.className} invalid`
        username.setCustomValidity("Поле должно быть заполненным!");

        password.className = `${password.className} invalid`
        password.setCustomValidity("Поле должно быть заполненным!");

    } else if (username.value === "123" && password.value === "123") {
        alert("This form has been successfully submitted!");
        let token = (Math.random() + 1).toString(36).substring(7);
        sessionStorage.setItem("authorizationKey", token);
        location.reload()

    } else {
        username.className = `${username.className} invalid`
        username.setCustomValidity("Логин или пароль неверны!");

        password.className = `${password.className} invalid`
    }
    username.value = "";
    password.value = "";
    // handle submit
});

renderKnowledgePanel()
updateUI()
let currentPage; // Текущая отображаемая страница
if (sessionStorage.getItem("currentPage")) {
    currentPage = Number(sessionStorage.getItem("currentPage"));
} else {
    currentPage = 1;
}


let elementsPerPage = 8
let maxButtonsDisplayed = 7;
let loginForm = document.getElementById("loginForm");

const numberOfDogs = 30
const numberOfCats = 30
let knowledgeBlocks = []

async function getDogsInfo() {
    try {
        const response = await fetch(`https://api.thedogapi.com/v1/breeds?limit=${numberOfDogs}`, {
            method: "GET", headers: {
                "x-api-key": "live_lWvmtEurGGkiDbuhzBhBgPfe4Snq0vqj7nQL2bx3CXfxcYVEMPZHGWnbIa3cYy7F"
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err);
    }
}

async function getCatsInfo() {
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/breeds?limit=${numberOfCats}`, {
            method: "GET", headers: {
                "x-api-key": "live_qTto4DK2B9DlgwEAyOqLNLd2Rt6nNxwhZxxz6AzdcCtFOYft9awLT2h6VNZ35hVm"
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err);
    }
}


function renderBlock(animalType, animalInfo) {
    switch (animalType) {
        case "cat":
            return (`<div class="knowledgeBlock">
            <img class = "knowledgeBlockImage" src = "${animalInfo.image.url}" alt = "cat's missing" >
            <h3>${animalInfo.name}</h3>
            <p>${animalInfo.temperament}</p>
            </div>`);
        case "dog":
            return (`<div class="knowledgeBlock">
        <img class = "knowledgeBlockImage" src = "${animalInfo.image.url}" alt = "dog's missing" >
        <h3>${animalInfo.name}</h3>
        <p>${animalInfo.temperament}</p>
        </div>`)
    }
}

async function getKnowledgeBlocks() {
    const newKnowledgeBlocks = []
    let dogsInfo = await getDogsInfo()
    console.log(`doginfo is `)
    console.log(dogsInfo)
    let catsInfo = await getCatsInfo()

    console.log(`catsInfo is `)
    console.log(catsInfo)

    while (dogsInfo.length > 0 && catsInfo.length > 0) {
        let newBlock;

        for (let i = 0; i < 3; i++) {
            if (dogsInfo[0]) {
                newKnowledgeBlocks.push(renderBlock("dog", dogsInfo[0]))
                dogsInfo.shift()
            } else break

        }

        for (let i = 0; i < 3; i++) {
            if (catsInfo[0]) {
                newKnowledgeBlocks.push(renderBlock("cat", catsInfo[0]))
                catsInfo.shift()
            } else break
        }
        console.log(dogsInfo.length + " " + catsInfo.length)
    }

    //render animals that's left, if there's any
    if (dogsInfo.length !== catsInfo.length) {
        if (dogsInfo.length > 0) {
            dogsInfo.forEach((element) => newKnowledgeBlocks.push(renderBlock("dog", element)))
        } else {
            catsInfo.forEach((element) => newKnowledgeBlocks.push(renderBlock("cat", element)))
        }
    }
    return newKnowledgeBlocks;
}

function setCurrentPage(pageToLoad) {
    currentPage = pageToLoad;
    sessionStorage.setItem("currentPage", currentPage)

    location.reload()
}

function createPaginationButtons(pagesCount) {
    let buttons = [];

    let i
    if (currentPage > 4) {
        buttons.push(`<button class="pageButton" key={12345} onclick="setCurrentPage(1)">В начало</button>`);
        buttons.push(`<button class="pageButton" key={111}>...</button>`);
        i = currentPage - 3 //add 3 buttons before dots
    } else {
        i = 1
    }
    for (i; i <= pagesCount; i++) {
        if (buttons.length <= maxButtonsDisplayed) {
            let className = "pageButton"
            if (i === currentPage) {
                className = "highlightedPageButton"
            }
            buttons.push(`<button class=${className} key={i} onclick="setCurrentPage(${i})">${i}</button>`);
        } else break
    }


    if (currentPage !== pagesCount) {
        buttons.push(`<button class="pageButton" key={000}>...</button>`);
        buttons.push(`<button class="pageButton" key={54321} onclick="setCurrentPage(${currentPage + 1})">Дальше</button>`);
    }
    return buttons;
}

function paginationSetup() {
    const totalPages = Math.ceil(knowledgeBlocks.length / elementsPerPage)
    document.getElementById("pages").innerHTML = createPaginationButtons(totalPages).join("")
}


async function renderKnowledgePanel() {
    // Вычисление индекса первого отображаемого элемента
    const startIndex = currentPage * elementsPerPage - elementsPerPage;

    if (knowledgeBlocks.length === 0) {
        knowledgeBlocks = await getKnowledgeBlocks()
    }
    const blocksOnThePage = knowledgeBlocks.slice(startIndex, startIndex + elementsPerPage);

    document.getElementById("knowledgePanel").innerHTML = blocksOnThePage.join("")
    paginationSetup()
}

//used to set current page when clicked on pagination button


//update UI depending on having been authorized
function updateUI() {
    if (sessionStorage.getItem("authorizationKey") !== null) {
        document.getElementById("auth").remove()
        document.getElementById("signButton").remove()
        document.getElementById("mainButton").className = "highlightedPageButton"
        void renderKnowledgePanel()
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


updateUI()

visualViewport.addEventListener("resize", () => {
    console.log(visualViewport.width)
    if (visualViewport.width < 670) {
        elementsPerPage = 2
    } else if (visualViewport.width < 930) {
        elementsPerPage = 4
    } else if (visualViewport.width < 1075) {
        elementsPerPage = 6
        maxButtonsDisplayed = 4
    } else {
        elementsPerPage = 8
        maxButtonsDisplayed = 7
    }
    void renderKnowledgePanel()
})

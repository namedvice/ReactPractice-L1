let currentPage; // Текущая отображаемая страница
if (sessionStorage.getItem("currentPage")) {
    currentPage = Number(sessionStorage.getItem("currentPage"));
} else {
    currentPage = 1;
}


let DOGS_PER_PAGE = 4
let CATS_PER_PAGE = 4


let currentDogsPerPage = DOGS_PER_PAGE
let currentCatsPerPage = CATS_PER_PAGE
// let skipDogs
// let skipCats

let maxButtonsDisplayed = 7;
let loginForm = document.getElementById("loginForm");

const numberOfDogs = 25
const numberOfCats = 25

//dogs and cats arrays of rendered html elements
const catsList = []
const dogsList = []
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

    let dogsInfo = await getDogsInfo()
    let catsInfo = await getCatsInfo()


    // create HTML Dog element for each dog and add it to the list of HTML elements

    // if (numberOfCats % currentCatsPerPage !== 0) {
    //     currentCatsPerPage = numberOfCats % currentCatsPerPage
    // }
    //
    // if (numberOfDogs % currentDogsPerPage !== 0) {
    //     currentDogsPerPage = numberOfDogs % currentDogsPerPage
    // }


    //check if there will be any cats displayed on this page
    if ((currentPage - 1) * currentCatsPerPage <= numberOfCats) {
        for (let i = (currentPage - 1) * CATS_PER_PAGE; i < (currentPage - 1) * CATS_PER_PAGE + CATS_PER_PAGE; i++) {
            if (i >= numberOfCats) {
                currentCatsPerPage -= 1
                currentDogsPerPage = currentCatsPerPage
                continue
            }
            catsList.push(renderBlock("cat", catsInfo[i]))
            // catsInfo.shift()
        }
    }

    //check if there will be any dogs displayed on this page
    if ((currentPage - 1) * currentDogsPerPage <= numberOfDogs) {
        // create HTML Cat element for each cat and add it to the list of HTML elements
        for (let i = (currentPage - 1) * currentDogsPerPage; i < (currentPage - 1) * currentDogsPerPage + currentDogsPerPage; i++) {
            if (i >= numberOfDogs) {
                currentDogsPerPage -= 1
                currentCatsPerPage = currentDogsPerPage
                continue
            }
            console.log("dog i == " + i)
            dogsList.push(renderBlock("dog", dogsInfo[i]))
            // dogsInfo.shift()
        }
    }

}

function setCurrentPage(pageToLoad) {
    currentPage = pageToLoad;
    sessionStorage.setItem("currentPage", currentPage)
    location.reload()
}

function createPaginationButtons(pagesCount) {
    let buttons = [];
    let i
    const buttonsBeforeSelected = 3

    //depending on maximum displayed buttons - we make user see only selected one and 3 before them
    if (currentPage > 4) {
        buttons.push(`<button class="pageButton" key={12345} onclick="setCurrentPage(1)">В начало</button>`);
        buttons.push(`<button class="pageButton_inactive" key={111}>...</button>`);
        i = currentPage - buttonsBeforeSelected //add 3 buttons before dots
    } else {
        i = 1
    }
    for (i; i <= pagesCount; i++) {
        if (buttons.length <= maxButtonsDisplayed) {
            let className = "pageButton"
            if (i === currentPage) {
                className = "pageButton_highlighted"
            }
            buttons.push(`<button class=${className} key={i} onclick="setCurrentPage(${i})">${i}</button>`);
        } else break
    }

    //add ... only if last page button is NOT visible
    if (i <= pagesCount) {
        buttons.push(`<button class="pageButton_inactive" key={000}>...</button>`);
    }

    if (currentPage !== pagesCount) {
        buttons.push(`<button class="pageButton" key={54321} onclick="setCurrentPage(${currentPage + 1})">Дальше</button>`);
    }
    return buttons;
}

function paginationSetup() {
    const totalPages = Math.ceil((numberOfCats + numberOfDogs) / (currentCatsPerPage + currentDogsPerPage))
    document.getElementById("pages").innerHTML = createPaginationButtons(totalPages).join("")
}


async function renderKnowledgePanel() {
    checkDeviceWidth()

    // Вычисление индекса первого отображаемого элемента
    const startIndex = currentPage * (currentCatsPerPage + currentDogsPerPage) - (currentCatsPerPage + currentDogsPerPage)

    if (catsList.length === 0 || dogsList.length === 0) {
        await getKnowledgeBlocks()
    }

    // await getKnowledgeBlocks()

    //add if no cats are on the page at all

    // if (!catsList[startIndex + catsPerPage]) {
    //     catsPerPage = catsList.length - startIndex
    //     dogsPerPage = catsPerPage
    // }
    let blocksOnThePage = [].concat(catsList, dogsList)


    document.getElementById("knowledgePanel").innerHTML = blocksOnThePage.join("")

    //change CSS of knowledge panel according to amount of items on the page
    if (currentDogsPerPage > currentCatsPerPage) {
        document.getElementById("knowledgePanel").style.gridTemplateColumns = `repeat(${currentDogsPerPage},minmax(13em, 15em))`
    } else {
        document.getElementById("knowledgePanel").style.gridTemplateColumns = `repeat(${currentCatsPerPage},minmax(13em, 15em))`
    }


    paginationSetup()
}

//used to set current page when clicked on pagination button


//update UI depending on having been authorized
function updateUI() {
    if (sessionStorage.getItem("authorizationKey") !== null) {
        document.getElementById("auth").remove()
        document.getElementById("signButton").remove()
        document.getElementById("mainButton").className = "pageButton_highlighted"
        void renderKnowledgePanel()
    } else {
        document.getElementById("signButton").className = "pageButton_highlighted"
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

// function checkDeviceWidth() {
//     if (visualViewport.width < 670) {
//         currentDogsPerPage = 2
//         currentCatsPerPage = 2
//     } else if (visualViewport.width < 930) {
//         currentDogsPerPage = 3
//         currentCatsPerPage = 3
//     } else if (visualViewport.width < 1075) {
//         currentDogsPerPage = 4
//         currentCatsPerPage = 4
//         maxButtonsDisplayed = 4
//     } else {
//         DOGS_PER_PAGE = 4
//         currentCatsPerPage = 4
//         maxButtonsDisplayed = 7
//     }
//     console.log("Viewport Width = " + visualViewport.width)
// }

function checkDeviceWidth() {
    if (visualViewport.width < 1024) {
        DOGS_PER_PAGE = 2
        CATS_PER_PAGE = 2
        currentDogsPerPage = DOGS_PER_PAGE
        currentCatsPerPage = CATS_PER_PAGE
    }
    console.log("Viewport Width = " + visualViewport.width)
}

visualViewport.addEventListener("resize", () => {
    checkDeviceWidth()
})

updateUI()

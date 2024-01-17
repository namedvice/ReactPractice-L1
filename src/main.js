import './styles/main.css'
import {setupLoginForm} from "./login.js";

let currentPage; // Текущая отображаемая страница
if (sessionStorage.getItem("currentPage")) {
    currentPage = Number(sessionStorage.getItem("currentPage"));
} else {
    currentPage = 1;
}

let pagesHTML = document.getElementById("pages")

let DOGS_PER_PAGE = 4
let CATS_PER_PAGE = 4


let currentDogsPerPage = DOGS_PER_PAGE
let currentCatsPerPage = CATS_PER_PAGE
// let skipDogs
// let skipCats

let maxButtonsDisplayed = 7;


const numberOfDogs = 25
const numberOfCats = 25

//dogs and cats arrays of rendered html elements
const catsList = []
const dogsList = []
let knowledgeBlocks = []

const getDogsInfo = async () => {
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

const getCatsInfo = async () => {
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


const renderBlock = (animalType, animalInfo) => {
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

const getKnowledgeBlocks = async () => {

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

const setCurrentPage = (pageToLoad) => {
    currentPage = pageToLoad;
    sessionStorage.setItem("currentPage", currentPage)
    location.reload()
}

const createPaginationButtons = (pagesCount) => {
    let buttonsCounter = 0;
    let i
    const buttonsBeforeSelected = 3

    //depending on maximum displayed buttons - we make user see only selected one and 3 before them
    if (currentPage > 4) {
        pagesHTML.innerHTML += `<button class="pageButton" key={12345}>В начало</button>`;
        pagesHTML.children[pagesHTML.children.length - 1].addEventListener("click", function () {
            setCurrentPage(1)
        })
        buttonsCounter++
        pagesHTML.innerHTML += `<button class="pageButton_inactive" key={111}>...</button>`;
        buttonsCounter++
        i = currentPage - buttonsBeforeSelected //add 3 buttons before dots
    } else {
        i = 1
    }
    for (i; i <= pagesCount; i++) {
        if (buttonsCounter <= maxButtonsDisplayed) {
            let className = "pageButton"
            if (i === currentPage) {
                className = "pageButton_highlighted"
            }
            pagesHTML.innerHTML += `<button class=${className} key=${i}>${i}</button>`;
            pagesHTML.children.item(pagesHTML.children.length - 1).addEventListener("click", function () {
                console.log("That's your i: " + i)
            })
            console.log(pagesHTML.children.item(pagesHTML.children.length - 1))
        } else break
    }

    //add ... only if last page button is NOT visible
    if (i <= pagesCount) {
        pagesHTML.innerHTML += `<button class="pageButton_inactive" key={000}>...</button>`;
    }

    if (currentPage !== pagesCount) {
        pagesHTML.innerHTML += `<button class="pageButton" key={54321} ">Дальше</button>`;
        pagesHTML.children.item(pagesHTML.children.length - 1).addEventListener("click", function () {
            setCurrentPage(currentPage + 1)
        })
    }
    // setCurrentPage(1)

}

const paginationSetup = () => {
    const totalPages = Math.ceil((numberOfCats + numberOfDogs) / (currentCatsPerPage + currentDogsPerPage))
    createPaginationButtons(totalPages)
}


export const renderKnowledgePanel = async () => {
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




const checkDeviceWidth = () => {
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
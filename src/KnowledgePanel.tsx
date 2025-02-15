import './App.css'
import Pagination from "./Pagination";
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import KnowledgeBlock from "./KnowledgeBlock"
import fetchDogsInfo from "./FetchDogsInfo";
import fetchCatsInfo from "./FetchCatsInfo";

interface ExampleObject {
    id: number
}

function KnowledgePanel() {

    const [currentPage, setCurrentPage] = useState<number>(1); // Текущая отображаемая страница

    const numberOfDogs: number = 25
    const numberOfCats: number = 25

    const pages: Array<number> = []
    let DOGS_PER_PAGE = 4
    let CATS_PER_PAGE = 4
    let currentDogsPerPage = DOGS_PER_PAGE
    let currentCatsPerPage = CATS_PER_PAGE
    const totalPages: number = Math.ceil((numberOfCats + numberOfDogs) / (currentCatsPerPage + currentDogsPerPage))
    const maxButtonsDisplayed = 7;

    //dogs and cats arrays of rendered html elements
    const [catsInfo, setCatsInfo] = useState([])
    const [dogsInfo, setDogsInfo] = useState([])

    const [catsList, setCatsList] = useState<number[]>([])
    const [dogsList, setDogsList] = useState<number[]>([])


    const getKnowledgeBlocks = async () => {

        setDogsInfo(await fetchDogsInfo(numberOfDogs))
        setCatsInfo(await fetchCatsInfo(numberOfCats))

    }

    const renderKnowledgeBlock = async () => {
        if (catsList.length === 0 || dogsList.length === 0) {
            await getKnowledgeBlocks()
        }
        setDogsList([])
        setCatsList([])
        //check if there will be any cats displayed on this page
        if ((currentPage - 1) * currentCatsPerPage <= numberOfCats) {
            for (let i = (currentPage - 1) * CATS_PER_PAGE; i < (currentPage - 1) * CATS_PER_PAGE + CATS_PER_PAGE; i++) {
                if (i >= numberOfCats) {
                    currentCatsPerPage -= 1
                    currentDogsPerPage = currentCatsPerPage
                    continue
                }
                setCatsList((prevCatsList) => [...prevCatsList, i])
                console.log("Cat added!")
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
                setDogsList((prevDogsList) => [...prevDogsList, i])
            }
        }
    }

    const updatePage = (pageToLoad: number) => {
        setCurrentPage(pageToLoad);
        sessionStorage.setItem("currentPage", currentPage.toString())
        console.log("Clicked page = " + currentPage)
    }

    const paginationSetup = () => {
        for (let i = currentPage; i <= currentPage + maxButtonsDisplayed; i++) {
            pages.push(i)
        }
    }


    useEffect(() => {
        checkDeviceWidth()
        // Вычисление индекса первого отображаемого элемента
        renderKnowledgeBlock()
        paginationSetup()
        if (currentDogsPerPage > currentCatsPerPage) {
            document.getElementById("knowledgePanel")!.style.gridTemplateColumns = `repeat(${currentDogsPerPage},minmax(13em, 15em))`
            document.getElementById("knowledgePanel")!.style.gridTemplateColumns = `repeat(${currentDogsPerPage},minmax(13em, 15em))`
        } else {
            document.getElementById("knowledgePanel")!.style.gridTemplateColumns = `repeat(${currentCatsPerPage},minmax(13em, 15em))`
            document.getElementById("knowledgePanel")!.style.gridTemplateColumns = `repeat(${currentCatsPerPage},minmax(13em, 15em))`
        }
    }, [currentPage])


    const checkDeviceWidth = () => {
        if (visualViewport!.width < 1024) {
            DOGS_PER_PAGE = 2
            CATS_PER_PAGE = 2
            currentDogsPerPage = DOGS_PER_PAGE
            currentCatsPerPage = CATS_PER_PAGE
        }
        console.log("Viewport Width = " + visualViewport!.width)
    }

    visualViewport!.addEventListener("resize", () => {
        checkDeviceWidth()
    })

    return (
        <>
            <section id="knowledge" className="bg-dark knowledgeSection">
                <div className="container">
                    <div id="knowledgePanel" className="knowledgePanel">
                        {catsList.map((i, index) => (
                            <KnowledgeBlock key={index} animalType={"cat"} animalInfo={catsInfo[i]}/>))}
                        {dogsList.map((i, index) => (
                            <KnowledgeBlock key={index} animalType={"dog"} animalInfo={dogsInfo[i]}/>))}
                    </div>
                </div>
            </section>
            <section id="pagination" className="bg-creme footer">
                <div className="container">
                    <div id="pages" className="pagination">
                        <Pagination currentPage={currentPage}
                                    totalPages={totalPages}
                                    setCurrentPage={updatePage}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KnowledgePanel;

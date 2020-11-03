import React, {useState} from 'react'
import AddMealPopUp from './AddMealPopUp'
import {leftArrow, rightArrow} from './icons'

export default function SearchResultsContainer(props) {

        let resultsArray = [];
    let isEmpty = Number(Object.keys(props.searchResults).length) === 0
    if (!isEmpty) {
        let haveResults = props.searchResults.results.length > 0;
        if (haveResults) {
            for (let i = 0; i < props.searchResults.results.length; i++){
                let item = props.searchResults.results[i]

                function getNutrition(input) {
                    let nutrients = item["nutrition"]["nutrients"]
                    for (let j = 0; j < nutrients.length; j++) {
                        if (nutrients[j]["title"] === input) return Math.round(nutrients[j]["amount"]) + " " +nutrients[j]["unit"]
                    }
                }

                let calories = getNutrition("Calories")
                let protein = getNutrition("Protein")
                let carbs = getNutrition("Carbohydrates")
                let fat = getNutrition("Fat")

                resultsArray.push(
                    <div key={item["id"]} className="singleRecipeResult d-flex">
                        <img className="singleRecipeResultImg" src={item["image"]} alt="Recipe"></img>
                        <div className="singleRecipeResultTextButtonContainer d-flex">
                            <div className="singleRecipeResultText">
                                <div className="singleRecipeResultTitle">{item["title"]}</div>
                                <div className="singleRecipeResultCal">Calories: {calories}</div>
                                <div className="singleRecipeResultProtein">Protein: {protein}</div>
                                <div className="singleRecipeResultCarbs">Carbs: {carbs}</div>
                                <div className="singleRecipeResultFar">Fat: {fat}</div>
                            </div>
                        <button
                            data-id={i} 
                            data-calories= {calories}
                            data-protein = {protein}
                            data-carbs = {carbs}
                            data-fat = {fat}
                            className="btn btn-outline-dark btn-md shadow-none"
                            onClick={handleAddMealClick}>Add</button>
                        </div>
                        
                    </div>
                )
            }
        }
    }

    const [togglePopUp, setTogglePopUp] = useState(false)
    
    const [mealToAddNutrition, setMealToAddNutrition] = useState({})

    const [mealToAdd, setMealToAdd] = useState({})
    function handleAddMealClick(e){
        setTogglePopUp(() => true)
        let arrayPosition = e.target.getAttribute('data-id')
        let recipeObject = props.searchResults.results[arrayPosition]
        setMealToAdd(() => recipeObject)

        let selectedCalories = e.target.getAttribute('data-calories')
        let selectedProtein = e.target.getAttribute('data-protein')
        let selectedCarbs = e.target.getAttribute('data-carbs')
        let selectedFat = e.target.getAttribute('data-fat')

        setMealToAddNutrition(() => {
            return {
                calories: selectedCalories,
                protein: selectedProtein,
                carbs: selectedCarbs,
                fat: selectedFat
            }
        })

    }

    const {currentResultPage, setCurrentResultPage, submitSearch} = props

    let bottomResultsNav = [];
    let totalResults = Number(props.searchResults['totalResults'])
    let numberOfPages = Math.round(totalResults/10)

    let bottomRange = 1;
    let topRange = numberOfPages;
    if (numberOfPages > 10) {
        if (currentResultPage < 5) {
            topRange = 9;
        }
        else if (topRange - currentResultPage < 5) {
            bottomRange = topRange-9
        }
        else {
            bottomRange = currentResultPage - 4;
            topRange = currentResultPage + 4;
        }
    }


    for (let i = bottomRange; i <= topRange; i++) {
        let selected = ""
        if (currentResultPage === i) selected=" selectedResultPage" 
        bottomResultsNav.push(
            <span key={"resultsNav"+i} className={"resultsNavBarNumbers" + selected}
            onClick={handleClickPageNumber}>
                {i}
            </span>
        )
    }

    function handleClickPageNumber(e) {
        let number = Number(e.target.innerHTML)
        setCurrentResultPage(() => number)
        submitSearch(number);
    }

    function handleClickLeftArrow() {
        if (currentResultPage === 1) return
        let number = currentResultPage - 1
        setCurrentResultPage(prev => prev - 1)
        
        submitSearch(number);
    }

    function handleClickRightArrow() {
        if (currentResultPage === numberOfPages) return
        let number = currentResultPage + 1
        setCurrentResultPage(prev => prev + 1)
        submitSearch(number);
    }

    function jumpUp5() {
        let number = currentResultPage + 5
        setCurrentResultPage(prev => prev + 5)
        submitSearch(number);
    }

    function jumpDown5() {
        let number = currentResultPage - 5
        setCurrentResultPage(prev => prev - 5)
        submitSearch(number);
    }

    let navbar = 
        <div className="resultsNavBar nohighlight">
           
            <span className="arrowIcon" onClick={handleClickLeftArrow}>{leftArrow}</span>
            {bottomRange !== 1 ? 
                <span className={"resultsNavBarNumbers"} >
                    <span key={"resultsNav"+1} className={"resultsNavBarNumbers"}
                    onClick={handleClickPageNumber}>
                        1
                    </span>
                    <span key={"resultsNav..."} className={"resultsNavBarNumbers"} onClick={jumpDown5}>
                        ...
                    </span>
                </span>
            :null
            }
            {bottomResultsNav}
            {topRange !== numberOfPages ? 
                <span className={"resultsNavBarNumbers"} >
                    <span key={"resultsNav..."} className={"resultsNavBarNumbers"} onClick={jumpUp5}>
                        ...
                    </span>
                    <span key={"resultsNav"+ numberOfPages} className={"resultsNavBarNumbers"}
                    onClick={handleClickPageNumber}>
                        {numberOfPages}
                    </span>
                </span>
            :null
            }
            <span className="arrowIcon" onClick={handleClickRightArrow}>{rightArrow}</span>
        </div> 


    return (
        <div className="searchResultsContainer">
            {!isEmpty ? navbar:null}
            {resultsArray}
            
            {togglePopUp ?
                <AddMealPopUp
                    setSelectedMeals={props.setSelectedMeals}
                    setTogglePopUp={setTogglePopUp}
                    inputSelectedMeal={props.inputSelectedMeal}
                    mealToAdd={mealToAdd}
                    selectedMeals={props.selectedMeals}
                    mealToAddNutrition={mealToAddNutrition}
                /> 
            :null}
            {!isEmpty ? navbar:null}
        </div>
    )
}

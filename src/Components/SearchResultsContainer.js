import React, {useState} from 'react'
import AddMealPopUp from './AddMealPopUp'

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
                        if (nutrients[j]["title"] === input) return nutrients[j]["amount"] + nutrients[j]["unit"]
                    }
                }

                resultsArray.push(
                    <div key={item["id"]} className="singleRecipeResult d-flex">
                        <img className="singleRecipeResultImg" src={item["image"]} alt="Recipe"></img>
                        <div className="singleRecipeResultTextButtonContainer d-flex">
                            <div className="singleRecipeResultText">
                                <div className="singleRecipeResultTitle">{item["title"]}</div>
                                <div className="singleRecipeResultCal">Calories: {getNutrition("Calories")}</div>
                                <div className="singleRecipeResultProtein">Protein: {getNutrition("Protein")}</div>
                                <div className="singleRecipeResultCarbs">Carbs: {getNutrition("Carbohydrates")}</div>
                                <div className="singleRecipeResultFar">Fat: {getNutrition("Fat")}</div>
                            </div>
                        <button
                            data-id={i} 
                            className="btn btn-outline-dark btn-md shadow-none"
                            onClick={handleAddMealClick}>Add</button>
                        </div>
                        
                    </div>
                )
            }
        }
    }

    const [togglePopUp, setTogglePopUp] = useState(false)
    
    const [mealToAdd, setMealToAdd] = useState({})
    function handleAddMealClick(e){
        setTogglePopUp(() => true)
        let arrayPosition = e.target.getAttribute('data-id')
        let recipeObject = props.searchResults.results[arrayPosition]
        setMealToAdd(() => recipeObject)
    }

    return (
        <div className="searchResultsContainer">
            {resultsArray}
            
            {togglePopUp ?
                <AddMealPopUp
                    setSelectedMeals={props.setSelectedMeals}
                    setTogglePopUp={setTogglePopUp}
                    inputSelectedMeal={props.inputSelectedMeal}
                    mealToAdd={mealToAdd}
                    selectedMeals={props.selectedMeals}
                /> 
            :null}
        </div>
    )
}

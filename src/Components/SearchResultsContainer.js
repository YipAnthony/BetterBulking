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
                    mealToAddNutrition={mealToAddNutrition}
                /> 
            :null}
        </div>
    )
}

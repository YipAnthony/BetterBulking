import React, {useState} from 'react'
import {upArrow, downArrow, linkIcon, xIcon} from './icons'

export default function AddMealPopUp(props) {

    function handleAddRecipe(e) {
        let index = e.target.getAttribute('data-index')
        let day = e.target.getAttribute('data-day')

        props.setSelectedMeals(prev =>{
            let output = [...prev]
            output[index][day] = [{...props.mealToAdd}]
            return output
        })
    }

    function handleAddAdditionalMeal(e) {
        let index = e.target.getAttribute('data-index')
        let day = e.target.getAttribute('data-day')
        let meal = props.mealToAdd
        
        props.setSelectedMeals(prev =>{
            let output = [...prev]
            output[index] = {...output[index], [day]:[...output[index][day], meal]}
            return output
        })
    }

    function handleRemoveAdditionalMeal(e) {
        let index = e.target.getAttribute('data-index')
        let day = e.target.getAttribute('data-day')
        let meal = props.mealToAdd
        if (props.selectedMeals[index][day].length === 0) return

        props.setSelectedMeals(prev => {
            let output = [...prev]
            let newOutput = []
            
            for (let j = 0; j < output[index][day].length; j ++) {
                if (output[index][day][j]["title"] === meal["title"]) {
                    newOutput = [...output[index][day].slice(0,j), ...output[index][day].slice(j+1)]
                    output[index] = {...output[index], [day]:[...newOutput]}
                    return output
                }
            }
            
        })
    }


    let mealArray = []
    props.selectedMeals.forEach((value, index) => {
        
        let breakfastCount = 0;
        value["Breakfast"].forEach(item => {
            if (item["title"] === props.mealToAdd["title"]) {
                breakfastCount++;
            }
        })

        let lunchCount = 0;
        value["Lunch"].forEach(item => {
            if (item["title"] === props.mealToAdd["title"]) {
                lunchCount++;
            }
        })

        let dinnerCount = 0;
        value["Dinner"].forEach(item => {
            if (item["title"] === props.mealToAdd["title"]) {
                dinnerCount++;
            }
        })

        let snackCount = 0;
        value["Snack"].forEach(item => {
            if (item["title"] === props.mealToAdd["title"]) {
                snackCount++;
            }
        })

        mealArray.push(
            <div key={value["day"]} className="col dayOfWeekContainer">
                <div className="dayOfWeek">{value["day"]}</div>
                <div className="mealTime">
                    
                        <div className="d-flex">
                            <div className="mealCounter">{breakfastCount}</div>
                            <button 
                                data-index={index}
                                data-day="Breakfast"
                                className="addButton btn btn-sm btn-outline-dark shadow-none"
                                onClick={handleAddAdditionalMeal}>{upArrow}</button>
                            <button 
                                data-index={index}
                                data-day="Breakfast"
                                className="addButton btn btn-sm btn-outline-dark shadow-none"
                                onClick={handleRemoveAdditionalMeal}>{downArrow}</button>
                        </div>

                    
                    {/* <div className="mealName">{Number(Object.keys(value["Breakfast"])) === 0 ? null: value["Breakfast"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Breakfast"])) === 0 ? null: value["Breakfast"]["calories"]}</div> */}
                </div>
                <div className="mealTime">
                   
                        <div className="d-flex">
                            <div className="mealCounter">{lunchCount}</div>
                            <button 
                                className="addButton btn btn-sm btn-outline-dark shadow-none"
                                data-index={index}
                                data-day="Lunch"
                                onClick={handleAddAdditionalMeal}
                                >{upArrow}</button>
                            <button 
                                data-index={index}
                                data-day="Lunch"
                                className="addButton btn btn-sm btn-outline-dark shadow-none"
                                onClick={handleRemoveAdditionalMeal}>{downArrow}</button>
                        </div>
                    
                    {/* <div className="mealName">{Number(Object.keys(value["Lunch"])) === 0 ? null: value["Lunch"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Lunch"])) === 0 ? null: value["Lunch"]["calories"]}</div> */}
                </div>
                <div className="mealTime">
                    
                        <div className="d-flex">
                         <div className="mealCounter">{dinnerCount}</div> 
                            <button 
                                className="addButton btn btn-sm btn-outline-dark shadow-none"
                                data-index={index}
                                data-day="Dinner"
                                onClick={handleAddAdditionalMeal}
                                >{upArrow}</button>
                            <button 
                                data-index={index}
                                data-day="Dinner"
                                className="addButton btn btn-sm btn-outline-dark shadow-none"
                                onClick={handleRemoveAdditionalMeal}>{downArrow}</button>
                        </div>
                    
                    {/* <div className="mealName">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["calories"]}</div> */}
                </div>
                <div className="mealTime">
                   
                        <div className="d-flex">
                            <div className="mealCounter">{snackCount}</div>
                            <button 
                                className="addButton btn btn-sm btn-outline-dark shadow-none"
                                data-index={index}
                                data-day="Snack"
                                onClick={handleAddAdditionalMeal}
                                >{upArrow}</button>
                            <button 
                                data-index={index}
                                data-day="Snack"
                                className="addButton btn btn-sm btn-outline-dark shadow-none"
                                onClick={handleRemoveAdditionalMeal}>{downArrow}</button>
                        </div>
                    
                    {/* <div className="mealName">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["calories"]}</div> */}
                </div>
                    
            </div>
        )
    })
 
    function snackCheck(day) {
        if (day["Snack"].length === 0) return
        let outputArray = [];
        for (let i=0; i < day["Snack"].length; i++) {
            outputArray.push(
                <span key={day["Snack"][i]["title"] + [i]}> 
                    X
                </span>
            )
        }
        return outputArray
    }

    let mealIngredients = [];
    let ingredientsArray = props.mealToAdd['nutrition']['ingredients']
    let numberServings = Number(props.mealToAdd["servings"])
    ingredientsArray.forEach(ingredient => {
        let adjustedToOneServing = ingredient['amount']/numberServings
        mealIngredients.push(
            <li key={ingredient['name']} className="individualIngredient">
                <span>{ingredient['name']}, </span>
                <span>{adjustedToOneServing + " " + ingredient['unit']}</span>
            </li>
        )
    })

    const [toggleIngredients, setToggleIngredients] = useState(false)
    function handleIngredientsClick() {
        setToggleIngredients(prev => !prev)
    }

    let instructions = [];
    let instructionsArray = props.mealToAdd['analyzedInstructions'][0]['steps']
    instructionsArray.forEach(step => {
        instructions.push(
            <li key={step['number'] + "instructions"}>
                {step['step']}
            </li>
        )
    })

    const [toggleInstructions, setToggleInstructions] = useState(false)
    function handleInstructionsClick() {
        setToggleInstructions(prev => !prev)
    }

    return (
        <div className="addMealOuterContainer">
            <div className="selectedMealImageInfo">
                <img src={props.mealToAdd["image"]} alt={props.mealToAdd["id"]}/>
                <div className="selectedMealTextInfo">
                    <div className="mealTitle">
                        {props.mealToAdd["title"]}
                        <a href={props.mealToAdd['sourceUrl']} rel="noreferrer" target="_blank">{linkIcon}</a>
                    </div>
                    <div className="ml-4">
                            <div className="nutritionTitle"> Nutrition (per serving): </div>
                            <div><strong>Calories:</strong> {props.mealToAddNutrition['calories']}</div>
                            <div><strong>Carbs:</strong> {props.mealToAddNutrition['carbs']}</div>
                            <div><strong>Fat:</strong> {props.mealToAddNutrition['fat']}</div>
                            <div><strong>Protein:</strong> {props.mealToAddNutrition['protein']}</div>
                        </div>
                    <div className='d-flex mt-4'>
                        <button className="btn btn-sm btn-outline-dark ml-4" onClick={handleIngredientsClick}>Ingredients</button>
                        {toggleIngredients ? 
                        <div className="ingredientsPopUp">
                            <div className="popUpTitle">Ingredients (per serving)</div>
                            <span className="closeButton" onClick={handleIngredientsClick}>{xIcon}</span>
                            <ul>{mealIngredients}</ul>
                        </div> 
                        :null}
                        
                        <button className="btn btn-sm btn-outline-dark ml-4" onClick={handleInstructionsClick}>Instructions</button>
                        {toggleInstructions ? 
                        <div className="ingredientsPopUp">
                            <div className="popUpTitle">Instructions</div>
                            <span className="closeButton" onClick={handleInstructionsClick}>{xIcon}</span>
                            <ol>{instructions}</ol>
                        </div> 
                        :null}
                    </div>
                </div>
            </div>
            <div className="addMealContainer">                                                                                                                                                                  
                <div className="row">
                    <div className="col dayOfWeekContainer">
                        <div className="dayOfWeek">Meal</div>
                        <div className="mealTime">Breakfast</div>
                        <div className="mealTime">Lunch</div>
                        <div className="mealTime">Dinner</div>
                        <div className="mealTime">Snacks</div>
                    </div>
                    {mealArray}
                </div>
                <button
                    className="btn btn-outline-dark btn-md"
                    onClick={() => props.setTogglePopUp(() => false)}>Close</button>
            </div>
        </div>
    )
}

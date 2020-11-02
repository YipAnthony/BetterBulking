import React from 'react'

export default function MealTypeFilter(props) {
    let mealArray = [
        "any", "main course", "side dish", "dessert", "appetizer", 'salad', 'bread', 'breakfast',
        'soup', 'beverage', 'sauce', 'marinade', 'fingerfood', 'snack', 'drink'
    ]

    let outputMealArray = []
    for (let i = 0; i < mealArray.length; i++) {
        outputMealArray.push(
            <option key={mealArray[i]}>{mealArray[i]}</option>
        )
    }

    function handleSelect(e){
        let selectedDiet = e.target.value
        if (selectedDiet === "any") selectedDiet = ""
        props.setMealTypeFilter(() => selectedDiet)
    }
    
    return (
        <span className="form-group">
            <label>Meal Type</label>
            <select className="form-control dietFilterSelection" onChange={handleSelect} id="exampleFormControlSelect1">
                {outputMealArray}
            </select>
        </span>
    )
}

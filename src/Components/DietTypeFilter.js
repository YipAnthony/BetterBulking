import React from 'react'

export default function DietTypeFilter(props) {
    let dietFilter = [
        "No preference", "Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian",
        "Vegan", "Pescetarian", "Paleo", "Primal", "Whole30"
    ]

    let outputdietFilter = []
    for (let i = 0; i < dietFilter.length; i++) {
        outputdietFilter.push(
            <option key={dietFilter[i]}>{dietFilter[i]}</option>
        )
    }

    function handleSelect(e){
        let selectedDiet = e.target.value
        if (selectedDiet === "No preference") selectedDiet = ""
        props.setDietFilter(() => selectedDiet)
    }
    
    return (
        <span className="form-group">
            <label for="exampleFormControlSelect1">Diet</label>
            <select className="form-control dietFilterSelection" onChange={handleSelect} id="exampleFormControlSelect1">
                {outputdietFilter}
            </select>
        </span>
    )
}

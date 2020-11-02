import React from 'react'

export default function CuisineFilter(props) {
    
    let cuisineArray = [
        "African","American","British","Cajun","Caribbean","Chinese","Eastern European",
        "European","French","German","Greek","Indian","Irish","Italian","Japanese",
        "Jewish","Korean","Latin American","Mediterranean","Mexican","Middle Eastern",
        "Nordic","Southern","Spanish","Thai","Vietnamese"
    ]

    let outputCuisineArray = []
    for (let i = 0; i < cuisineArray.length; i++) {
        outputCuisineArray.push(
            <div key={cuisineArray[i]} className="dropdown-item " onChange={handleSelection} >
                    <input data-cuisine={cuisineArray[i]} className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label untouchable">
                        {cuisineArray[i]}
                    </label>
            </div>
        )
    }

    function handleSelection(e) {
        let selectedCuisine = e.target.getAttribute('data-cuisine')
        let isChecked = e.target.checked

        if (isChecked) {
            props.setCuisineFilter(prev => {
                return [...prev, selectedCuisine]
            }) 
        } else {
            props.setCuisineFilter(prev => {
                let copy = [...prev]
                let output = []
                copy.forEach(item => {
                    if (item !== selectedCuisine) {
                        output = [...output, item]
                    }
                })
                return output
            })
        }
    }
    
    return (
        <span className="form-group ">
            <label>Cuisine</label><br/>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cuisine</button>
            <div className="dropdown-menu " aria-labelledby="dropdownMenuButton" >
                {outputCuisineArray}    
            </div>
        </span>
    )
}
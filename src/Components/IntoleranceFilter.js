import React from 'react'

export default function IntoleranceFilter(props) {
    let intoleranceArray = [
        "Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish",
        "Soy", "Sulfite", "Tree Nut", "Wheat"
    ]

    let outputintoleranceArray = []
    for (let i = 0; i < intoleranceArray.length; i++) {
        outputintoleranceArray.push(
            <div className="dropdown-item" key={intoleranceArray[i]} onChange={handleSelection}>
                    <input data-intolerance={intoleranceArray[i]} className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label">
                        {intoleranceArray[i]}
                    </label>
            </div>
        )
    }

    function handleSelection(e) {
        let selectedIntolerance = e.target.getAttribute('data-intolerance')
        let isChecked = e.target.checked

        if (isChecked) {
            props.setIntoleranceFilter(prev => {
                return [...prev, selectedIntolerance]
            }) 
        } else {
            props.setIntoleranceFilter(prev => {
                let copy = [...prev]
                let output = []
                copy.forEach(item => {
                    if (item !== selectedIntolerance) {
                        output = [...output, item]
                    }
                })
                return output
            })
        }
    }
    
    return (
        <span className="form-group">
            <label>Intolerances</label><br/>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Intolerances</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {outputintoleranceArray}    
                </div>
        </span>
    )
}

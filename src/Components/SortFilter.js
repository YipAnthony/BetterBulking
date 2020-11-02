import React from 'react'

export default function SortFilter(props) {
    
    let sortFilter = [
        "popularity", "price", "calories", "carbs", "cholesterol", "protein",
        "total-fat"
    ]
    
    let outputSortFilter = [];
    for (let i = 0; i < sortFilter.length; i++) {
        outputSortFilter.push(
            <option key={sortFilter[i]}>{sortFilter[i]}</option>
        )
    }

    function handleSelect(e){
        let selectedSort = e.target.value
        props.setSortFilter(() => selectedSort)
    }

    return (
        <span className="form-group">
            <label>Sort By: </label>
            <select className="form-control dietFilterSelection" onChange={handleSelect} id="exampleFormControlSelect1">
                {outputSortFilter}
            </select>
        </span>
    )
}

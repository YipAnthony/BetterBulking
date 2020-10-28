import React from 'react'

export default function SortDirectionFilter(props) {
  
    function handleSelect(e){
        let selectedSortDirection = e.target.value
        if (selectedSortDirection === "Most") selectedSortDirection = "desc"
        else if (selectedSortDirection === "Least") selectedSortDirection = "asc"
        props.setSortDirectionFilter(() => selectedSortDirection)
    }
    
    return (
        <span className="form-group">
            <label for="exampleFormControlSelect1">Sort Direction: </label>
            <select className="form-control dietFilterSelection" onChange={handleSelect} id="exampleFormControlSelect1">
                <option>Most</option>
                <option>Least</option>
            </select>
        </span>
    )
}

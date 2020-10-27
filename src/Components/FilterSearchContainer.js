import React from 'react'
import CuisineFilter from './CuisineFilter'
import DietTypeFilter from './DietTypeFilter'
import IntoleranceFilter from './IntoleranceFilter'

export default function FilterSearchContainer(props) {



    return (
        <div className="filterSearchContainer d-flex">
            <CuisineFilter 
                cuisineFilter={props.cuisineFilter}
                setCuisineFilter={props.setCuisineFilter}/>
            <DietTypeFilter setDietFilter={props.setDietFilter}/>
            <IntoleranceFilter 
                intoleranceFilter={props.intoleranceFilter}
                setIntoleranceFilter={props.setIntoleranceFilter}/>
        </div>
    )
}

import React from 'react'
import CuisineFilter from './CuisineFilter'
import DietTypeFilter from './DietTypeFilter'
import IntoleranceFilter from './IntoleranceFilter'
import SortFilter from './SortFilter'
import SortDirectionFilter from './SortDirectionFilter'
import MealTypeFilter from './MealTypeFilter'


export default function FilterSearchContainer(props) {



    return (
        <div className="filterSearchContainer d-flex">
            <CuisineFilter 
                // cuisineFilter={props.cuisineFilter}
                setCuisineFilter={props.setCuisineFilter}/>
            <MealTypeFilter 
                setMealTypeFilter={props.setMealTypeFilter}
            />
            <DietTypeFilter setDietFilter={props.setDietFilter}/>
            <IntoleranceFilter 
                // intoleranceFilter={props.intoleranceFilter}
                setIntoleranceFilter={props.setIntoleranceFilter}/>
            <SortFilter
                setSortFilter={props.setSortFilter}
            />
            <SortDirectionFilter
                setSortDirectionFilter={props.setSortDirectionFilter}
            />
        </div>
    )
}

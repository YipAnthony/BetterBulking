import React from 'react'
import {xIconBig} from './icons'

export default function MealsForTheDay({daySelectedMeal, setToggleShowSelectedMeal}) {
    
    let currentDay; 
    if (daySelectedMeal['day'] === "Su") currentDay = "Sunday"
    else if (daySelectedMeal['day'] === "Mo") currentDay = "Monday"
    else if (daySelectedMeal['day'] === "Tu") currentDay = "Tuesday"
    else if (daySelectedMeal['day'] === "We") currentDay = "Wednesday"
    else if (daySelectedMeal['day'] === "Th") currentDay = "Thursday"
    else if (daySelectedMeal['day'] === "Fr") currentDay = "Friday"
    else if (daySelectedMeal['day'] === "Sa") currentDay = "Saturday"
    
    let meals = ["Breakfast", "Lunch", "Dinner", "Snack"]
    let outputArray = [];

    function getMeals(meal) {
        let arrayCurrentMeal = daySelectedMeal[meal];
        let output = []
        let map = new Map();

        arrayCurrentMeal.forEach(meal => {
            if (map.has(meal)) {
                let prev = map.get(meal)
                map.set(meal, prev + 1)
            }
            else (map.set(meal, 1))

        })
        map.forEach( (value, key) => {
            output.push(
                <div className="individualMeal" key={key['id'] + key['title']}>
                    <img src={key['image']}/>
                    <div className="rightSideText">
                        <div className="rightSideTitle">{key['title']}</div>
                        Count: {value}
                    </div>
                    {/* add more later */}
                </div>
            )
        })
        
        return output
    }

    meals.forEach(meal => {
        let meals = getMeals(meal)
        outputArray.push(
            <div key={meal+"test"}>
                <div className="mealTypeTitle">{meal}</div>
                {meals}
            </div>
        )
    })

    function toggleOff() {
        setToggleShowSelectedMeal(() => false)
    }

    console.log (daySelectedMeal)

    return (
        <div className="selectedDayMealsContainer">
            <div className="selectedDayTitle">{currentDay}</div>
            {outputArray}
            <div className="closeButton" onClick={toggleOff}>{xIconBig}</div>
        </div>
    )
}

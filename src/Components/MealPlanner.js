import React from 'react'
import restaurant from './images/restaurant.svg'

export default function MealPlanner(props) {

    let mealArray = []
    props.selectedMeals.forEach((value, index) => {
        mealArray.push(
            <div key={value["day"]} className="col-sm-1 dayOfWeekContainer">
                <div className="dayOfWeek">{value["day"]}</div>
                <div className="mealTime">
                {mealCheck(value, "Breakfast")}
                    {/* <div className="mealName">{Number(Object.keys(value["Breakfast"])) === 0 ? null: value["Breakfast"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Breakfast"])) === 0 ? null: value["Breakfast"]["calories"]}</div> */}
                </div>
                <div className="mealTime">
                {mealCheck(value, "Lunch")}
                    {/* <div className="mealName">{Number(Object.keys(value["Lunch"])) === 0 ? null: value["Lunch"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Lunch"])) === 0 ? null: value["Lunch"]["calories"]}</div> */}
                </div>
                <div className="mealTime">
                {mealCheck(value, "Dinner")}
                    {/* <div className="mealName">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["calories"]}</div> */}
                </div>
                <div className="mealTime">
                    {mealCheck(value, "Snack")}
                    {/* {snackGenerator(value)} */}
                </div>
                <div className ="mealTime">
                    {Math.round(props.currentDailyCal[index])}
                </div>
            </div>
        )
    })

    
    function mealCheck(day, meal) {
        let numberOfMeals = day[meal].length
        if (numberOfMeals === 0) {
            return (
                <span key={day[meal]["title"]}>-</span>
            )
        } else if (numberOfMeals === 1) {
            return (
                <span key={day[meal]["title"]}>
                    <img className="mealIcon" src={restaurant}/>
                </span>
            )
        }
        else {
            return (
                <span key={day[meal]["title"]}>
                    <img className="mealIcon" src={restaurant}/> x {numberOfMeals}
                </span>
            )
        }
    }

 
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2 dayOfWeekContainer">
                    <div className="dayOfWeek">Meal </div>
                    <div className="mealTime">Breakfast</div>
                    <div className="mealTime">Lunch</div>
                    <div className="mealTime">Dinner</div>
                    <div className="mealTime">Snacks</div>
                    <div className="mealTime">Daily Cal</div>
                </div>
                {mealArray}
            </div>
        </div>
    )
}

import React from 'react'


export default function MealPlanner(props) {

    let mealArray = []
    props.selectedMeals.forEach((value) => {
        mealArray.push(
            <div key={value["day"]} className="col-sm-1 dayOfWeekContainer">
                <div className="dayOfWeek">{value["day"]}</div>
                <div className="mealTime">
                    {value["Breakfast"].length === 0 ? "o": "X"}
                    {/* <div className="mealName">{Number(Object.keys(value["Breakfast"])) === 0 ? null: value["Breakfast"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Breakfast"])) === 0 ? null: value["Breakfast"]["calories"]}</div> */}
                </div>
                <div className="mealTime">
                    {value["Lunch"].length === 0 ? "o": "X"}
                    {/* <div className="mealName">{Number(Object.keys(value["Lunch"])) === 0 ? null: value["Lunch"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Lunch"])) === 0 ? null: value["Lunch"]["calories"]}</div> */}
                </div>
                <div className="mealTime">
                    {value["Dinner"].length === 0 ? "o": "X"}
                    {/* <div className="mealName">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["calories"]}</div> */}
                </div>
                <div className="mealTime">
                    {snackCheck(value)}
                    {/* {snackGenerator(value)} */}
                </div>
                    
            </div>
        )
    })
    
    function snackCheck(day) {
        if (day["Snack"].length === 0) return
        let outputArray = [];
        for (let i=0; i < day["Snack"].length; i++) {
            outputArray.push(
                <span key={day["Snack"][i]["title"] + [i]}> 
                    X
                </span>
            )
        }
        return outputArray
    }

    function snackGenerator(day) {
        if (day["Snack"].length === 0) return
        let outputArray = [];
        for (let i=0; i < day["Snack"].length; i++) {
            outputArray.push(
                <div key={day["Snack"][i]["title"] + [i]}> 
                    <div className="mealName">{day["Snack"][i]["title"]}</div>
                    <div className="mealCal">{day["Snack"][i]["calories"]}</div>
                </div>
            )
        }
        return outputArray
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2 dayOfWeekContainer">
                    <div className="dayOfWeek">Meal</div>
                    <div className="mealTime">Breakfast</div>
                    <div className="mealTime">Lunch</div>
                    <div className="mealTime">Dinner</div>
                    <div className="mealTime">Snacks</div>
                </div>
                {mealArray}
            </div>
        </div>
    )
}

import React from 'react'


export default function MealPlanner(props) {

    let mealArray = []
    props.selectedMeals.forEach((value) => {
        mealArray.push(
            <div key={value["day"]} className="col-md">
                <div className="dayOfWeek">{value["day"]}</div>
                <div className="mealTime">Breakfast</div>
                    {console.log(value["Breakfast"])}
                    <div className="mealName">{Number(Object.keys(value["Breakfast"])) === 0 ? null: value["Breakfast"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Breakfast"])) === 0 ? null: value["Breakfast"]["calories"]}</div>
                <div className="mealTime">Lunch</div>
                    <div className="mealName">{Number(Object.keys(value["Lunch"])) === 0 ? null: value["Lunch"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Lunch"])) === 0 ? null: value["Lunch"]["calories"]}</div>
                <div className="mealTime">Dinner</div>
                    <div className="mealName">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["calories"]}</div>
                <div className="mealTime">Snacks</div>
                    {snackGenerator(value)}
            </div>
        )
    })
    
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
                {mealArray}
            </div>
        </div>
    )
}

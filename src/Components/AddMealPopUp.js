import React from 'react'

export default function AddMealPopUp(props) {

    function handleAddRecipe(e) {
        let index = e.target.getAttribute('data-index')
        let day = e.target.getAttribute('data-day')

        props.setSelectedMeals(prev =>{
            let output = [...prev]
            output[index][day] = [{...props.mealToAdd}]
            return output
        })
    }

    function handleAddAdditionalMeal(e) {
        let index = e.target.getAttribute('data-index')
        let day = e.target.getAttribute('data-day')
        let meal = props.mealToAdd
        
        props.setSelectedMeals(prev =>{
            let output = [...prev]
            output[index] = {...output[index], [day]:[...output[index][day], meal]}
            return output
        })
    }

    let mealArray = []
    props.selectedMeals.forEach((value, index) => {
        
        mealArray.push(
            <div key={value["day"]} className="col dayOfWeekContainer">
                <div className="dayOfWeek">{value["day"]}</div>
                <div className="mealTime">
                    {value["Breakfast"].length === 0 ? 
                        <button 
                            className="addButton btn btn-sm btn-outline-dark"
                            data-index={index}
                            data-day="Breakfast"
                            onClick={handleAddRecipe}>Add</button>
                        :
                        <div className="d-flex">
                            <button 
                                data-index={index}
                                data-day="Breakfast"
                                className="addButton btn btn-sm btn-outline-dark"
                                onClick={handleAddAdditionalMeal}>Add</button>
                            <button 
                                data-index={index}
                                data-day="Breakfast"
                                className="addButton btn btn-sm btn-outline-dark"
                                onClick={handleAddRecipe}>Replace</button>
                        </div>

                    }
                    {/* <div className="mealName">{Number(Object.keys(value["Breakfast"])) === 0 ? null: value["Breakfast"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Breakfast"])) === 0 ? null: value["Breakfast"]["calories"]}</div> */}
                </div>
                <div className="mealTime">
                    {value["Lunch"].length  === 0 ? 
                    <button 
                            className="addButton btn btn-sm btn-outline-dark"
                            data-index={index}
                            data-day="Lunch"
                            onClick={handleAddRecipe}>Add</button>
                        :
                        <div className="d-flex">
                            <button 
                                className="addButton btn btn-sm btn-outline-dark"
                                data-index={index}
                                data-day="Lunch"
                                onClick={handleAddAdditionalMeal}
                                >Add</button>
                            <button 
                                data-index={index}
                                data-day="Lunch"
                                className="addButton btn btn-sm btn-outline-dark"
                                onClick={handleAddRecipe}>Replace</button>
                        </div>
                    }
                    {/* <div className="mealName">{Number(Object.keys(value["Lunch"])) === 0 ? null: value["Lunch"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Lunch"])) === 0 ? null: value["Lunch"]["calories"]}</div> */}
                </div>
                <div className="mealTime">
                    {value["Dinner"].length  === 0 ? 
                    <button 
                            className="addButton btn btn-sm btn-outline-dark"
                            data-index={index}
                            data-day="Dinner"
                            onClick={handleAddRecipe}>Add</button>
                        :
                        <div className="d-flex">
                            <button 
                                className="addButton btn btn-sm btn-outline-dark"
                                data-index={index}
                                data-day="Dinner"
                                onClick={handleAddAdditionalMeal}
                                >Add</button>
                            <button 
                                data-index={index}
                                data-day="Dinner"
                                className="addButton btn btn-sm btn-outline-dark"
                                onClick={handleAddRecipe}>Replace</button>
                        </div>
                    }
                    {/* <div className="mealName">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["calories"]}</div> */}
                </div>
                <div className="mealTime">
                    {value["Snack"].length  === 0 ? 
                    <button 
                            className="addButton btn btn-sm btn-outline-dark"
                            data-index={index}
                            data-day="Snack"
                            onClick={handleAddRecipe}>Add</button>
                        :
                        <div className="d-flex">
                            <button 
                                className="addButton btn btn-sm btn-outline-dark"
                                data-index={index}
                                data-day="Snack"
                                onClick={handleAddAdditionalMeal}
                                >Add</button>
                            <button 
                                data-index={index}
                                data-day="Snack"
                                className="addButton btn btn-sm btn-outline-dark"
                                onClick={handleAddRecipe}>Replace</button>
                        </div>
                    }
                    {/* <div className="mealName">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["title"]}</div>
                    <div className="mealCal">{Number(Object.keys(value["Dinner"])) === 0 ? null: value["Dinner"]["calories"]}</div> */}
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

    return (
        <div className="addMealContainer">                                                                                                                                                                  
            <div className="row">
                <div className="col dayOfWeekContainer">
                    <div className="dayOfWeek">Meal</div>
                    <div className="mealTime">Breakfast</div>
                    <div className="mealTime">Lunch</div>
                    <div className="mealTime">Dinner</div>
                    <div className="mealTime">Snacks</div>
                </div>
                {mealArray}
            </div>
            <button
                className="btn btn-outline-dark btn-md"
                onClick={() => props.setTogglePopUp(() => false)}>Close</button>
        </div>
    )
}

import React, {useState} from 'react';
import PromptUserInfo from './Components/PromptUserInfo'
import MealPlanner from './Components/MealPlanner'

function App() {

  let [dailyCal, setDailyCal] = useState(Number)
  let [userDiet, setUserDiet] = useState("")
  let [currentDailyCal, setCurrentDailyCal] = useState(
    {
      "m": Number,
      "tu": Number,
      "w": Number,
      "th": Number,
      "f": Number,
      "sa": Number,
      "su": Number
    })
  let [currentDailyMacros, setCurrentDailyMacros] = useState(
    {
      "m": {
        "protein": Number,
        "carbs": Number,
        "fat": Number
      },
      "tu": {
        "protein": Number,
        "carbs": Number,
        "fat": Number
      },
      "w": {
        "protein": Number,
        "carbs": Number,
        "fat": Number
      },
      "th": {
        "protein": Number,
        "carbs": Number,
        "fat": Number
      },
      "f": {
        "protein": Number,
        "carbs": Number,
        "fat": Number
      },
      "sa": {
        "protein": Number,
        "carbs": Number,
        "fat": Number
      },
      "su": {
        "protein": Number,
        "carbs": Number,
        "fat": Number
      },
    }
  )
  let [selectedMeals, setSelectedMeals] = useState(
    [
      {
        "day":"Monday",
        "Breakfast":{},
        "Lunch":{},
        "Dinner":{},
        "Snack": [{"title": "Curry", "calories":500},{"title": "Tacos", "calories":800} ]
      },
      {
        "day":"Tuesday",
        "Breakfast":{},
        "Lunch":{},
        "Dinner":{},
        "Snack": []
      },
      {
        "day":"Wednesday",
        "Breakfast":{},
        "Lunch":{},
        "Dinner":{},
        "Snack": []
      },
      {
        "day":"Thursday",
        "Breakfast":{},
        "Lunch":{},
        "Dinner":{},
        "Snack": [{"title": "Chinese", "calories":1000},{"title": "Rice", "calories":500} ]
      },
      {
        "day":"Friday",
        "Breakfast":{},
        "Lunch":{},
        "Dinner":{},
        "Snack": []
      },
      {
        "day":"Saturday",
        "Breakfast":{},
        "Lunch":{},
        "Dinner":{},
        "Snack": []
      },
      {
        "day":"Sunday",
        "Breakfast":{},
        "Lunch":{},
        "Dinner":{},
        "Snack": []
      }
    ]
  )

  function inputSelectedMeal(day, time, meal) {
    setSelectedMeals(prev => {
      let output = {
        ...prev,
      }
      output[day][time] = meal
      return output
    })
  }

  let [initialInput, setInitialInput] = useState(true)


  return (
    <div className="App">
      {initialInput ? 
      <PromptUserInfo
          setDailyCal={setDailyCal}
          setUserDiet={setUserDiet}
          setInitialInput={setInitialInput}
      /> : null}
      {!initialInput ? 
      <MealPlanner 
        selectedMeals={selectedMeals}/>
      :null
      }
    </div>
  );
}

export default App;
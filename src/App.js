import React, {useState} from 'react';
import PromptUserInfo from './Components/PromptUserInfo'
import MealPlanner from './Components/MealPlanner'
import SearchMeals from './Components/SearchMeals'

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
        "day":"Mo",
        "Breakfast":[],
        "Lunch":[],
        "Dinner":[],
        "Snack": [{"title": "Curry", "calories":500},{"title": "Tacos", "calories":800} ]
      },
      {
        "day":"Tu",
        "Breakfast":[],
        "Lunch":[],
        "Dinner":[],
        "Snack": []
      },
      {
        "day":"We",
        "Breakfast":[],
        "Lunch":[],
        "Dinner":[],
        "Snack": []
      },
      {
        "day":"Th",
        "Breakfast":[],
        "Lunch":[],
        "Dinner":[],
        "Snack": [{"title": "Chinese", "calories":1000},{"title": "Rice", "calories":500} ]
      },
      {
        "day":"Fr",
        "Breakfast":[],
        "Lunch":[],
        "Dinner":[],
        "Snack": []
      },
      {
        "day":"Sa",
        "Breakfast":[],
        "Lunch":[],
        "Dinner":[],
        "Snack": []
      },
      {
        "day":"Su",
        "Breakfast":[],
        "Lunch":[],
        "Dinner":[],
        "Snack": []
      }
    ]
  )

  function inputSelectedMeal(day, time, meal) {

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
      <div>
        <MealPlanner 
          selectedMeals={selectedMeals}/>
        <SearchMeals
          setSelectedMeals={setSelectedMeals}
          inputSelectedMeal={inputSelectedMeal}
          selectedMeals={selectedMeals}
        />
      </div>
      :null
      }
    </div>
  );
}

export default App;
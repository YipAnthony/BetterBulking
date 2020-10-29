import React, {useState, useEffect} from 'react';
import PromptUserInfo from './Components/PromptUserInfo'
import MealPlanner from './Components/MealPlanner'
import SearchMeals from './Components/SearchMeals'

function App() {

  let [dailyCal, setDailyCal] = useState(Number)
  let [userDiet, setUserDiet] = useState("")
  let [currentDailyCal, setCurrentDailyCal] = useState(
    [
      Number,
      Number,
      Number,
      Number,
      Number,
      Number,
      Number
    ])
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
        "Snack": []
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
        "Snack": []
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

  function getNutrition(nutrient, source) {
    let nutrients = source["nutrition"]["nutrients"]
    for (let j = 0; j < nutrients.length; j++) {
        if (nutrients[j]["title"] === nutrient) return nutrients[j]["amount"]
    }
}

  useEffect(() => {
    for (let i = 0; i < selectedMeals.length; i++) {
      let dayOfWeek = selectedMeals[i]
      let dailyCal = 0;
      for (const item in dayOfWeek) {
        let isMeal = item !== "day";
        let hasRecipe = item.length > 0
        
        if (isMeal && hasRecipe) {
          // eslint-disable-next-line no-loop-func
          dayOfWeek[item].forEach(meal => {
            dailyCal += getNutrition("Calories", meal)
          })
        }
      }
      setCurrentDailyCal(prev => {
        let output = [...prev]
        output[i] = dailyCal
        return output
      })
    }
  }, [selectedMeals])

  let [initialInput, setInitialInput] = useState(true)


  return (
    <div className="App" data-test="App">
      {initialInput ? 
      <PromptUserInfo
          setDailyCal={setDailyCal}
          setUserDiet={setUserDiet}
          setInitialInput={setInitialInput}
      /> : null}
      {!initialInput ? 
      <div>
        <MealPlanner 
          selectedMeals={selectedMeals}
          currentDailyCal={currentDailyCal}  
          />
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
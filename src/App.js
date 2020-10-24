import React, {useState} from 'react';
import PromptUserInfo from './Components/PromptUserInfo'

function App() {

  let [dailyCal, setDailyCal] = useState(Number)
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
    {
      "m": {
        "breakfast":{},
        "lunch":{},
        "dunner":{},
        "snack": {}
      },
      "tu": {
        "breakfast":{},
        "lunch":{},
        "dunner":{},
        "snack": {}
      },
      "w": {
        "breakfast":{},
        "lunch":{},
        "dunner":{},
        "snack": {}
      },
      "th": {
        "breakfast":{},
        "lunch":{},
        "dunner":{},
        "snack": {}
      },
      "f": {
        "breakfast":{},
        "lunch":{},
        "dunner":{},
        "snack": {}
      },
      "sa": {
        "breakfast":{},
        "lunch":{},
        "dunner":{},
        "snack": {}
      },
      "su":{
        "breakfast":{},
        "lunch":{},
        "dunner":{},
        "snack": {}
      }
    }
  )

  function setDailyCalRequirement(input) {
    setDailyCal(() => input)
  }

  function inputSelectedMeal(day, time, meal) {
    setSelectedMeals(prev => {
      let output = {
        ...prev,
      }
      output[day][time] = meal
      return output
    })
  }

  return (
    <div className="App">
      <PromptUserInfo
          setDailyCalRequirement={setDailyCalRequirement}
      /> 
    </div>
  );
}

export default App;
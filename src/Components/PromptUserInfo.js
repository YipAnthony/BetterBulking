import React, {useState} from 'react'

export default function PromptUserInfo(props) {
    let [calInput, setCalInput] = useState("")

    function handleInput(e){
        let userCalInput = e.target.value
        let digitsOnly = /^[0-9]*$/
        if (!digitsOnly.test(userCalInput)) return
        setCalInput(() => userCalInput)
    }

    let promptUserInfoStyle = {
        fontSize: "45px"
    }

    let diets = [
        "No restrictions",
        "Gluten Free",
        "Ketogenic",
        "Vegetarian",
        "Lacto-Vegetarian",
        "Ovo-Vegetarian",
        "Vegan",
        "Pescetarian",
        "Paleo",
        "Primal",
        "Whole30"
    ]


    return (
        <div className="form-group" style={promptUserInfoStyle}>
            <label>What's your daily calorie intake goal?</label><br/>
            <input value={calInput} onChange={handleInput} className="form-control input border-0 shadow-none"></input>
            <button 
                className="btn btn-primary btn-sm shadow-none"
                onClick={() => props.setDailyCalRequirement(calInput)}>Submit</button>
        </div>
    )
}

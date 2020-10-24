import React, {useState} from 'react'

export default function PromptUserInfo(props) {
    let [calInput, setCalInput] = useState("")

    function handleInput(e){
        let userCalInput = e.target.value
        let digitsOnly = /^[0-9]*$/
        if (!digitsOnly.test(userCalInput)) return
        setCalInput(() => userCalInput)
    }

    let [userDiet, setUserDiet] = useState("")
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

    function handleDietClick(e) {
        let container = e.target.parentNode
        for (let i = 0; i < container.childNodes.length; i++) {
            if (container.childNodes[i].classList.contains('active')) {
                container.childNodes[i].classList.remove('active')
            }
        }
        e.target.classList.add('active')
        setUserDiet(() => e.target.innerHTML)
    }

    let dietButtons = []
    for (let i = 0; i < diets.length; i++) {
        dietButtons.push(
        <button key={diets[i]} 
            className="dietButton btn btn-sm btn-outline-dark shadow-none"
            onClick={handleDietClick}>{diets[i]}</button>
        )
    }

    let [moveOn, setMoveOn] = useState(false)
    function transition() {
        if (calInput === "") return
        props.setDailyCal(() => calInput);
        setMoveOn(() => true)
    }

    return (
        <div className="form-group userInfoContainer">
            {moveOn === false? 
            <div className="userPrefContainer">
                <label>What's your daily calorie intake goal?</label>
                <span className="smallerFont"><input value={calInput} 
                    onChange={handleInput} 
                    className="calForm form-control input border-0 shadow-none"></input><span>cals</span></span>
                <br/>
                <button 
                    className="btn btn-outline-dark btn-lg shadow-none"
                    onClick={transition}>Submit</button>
                <br/>
            </div>:null}
            {moveOn===true?
            <div className="userPrefContainer">
                <label>What's your dietary preference?</label><br/>
                <div className="dietButtonContainer">{dietButtons}</div>
                <button 
                    className="btn btn-dark btn-lg shadow-none"
                    onClick={() => props.setUserDiet(() => userDiet)}>Submit</button>
            </div>:null}
        </div>
    )
}

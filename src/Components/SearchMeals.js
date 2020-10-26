import React, {useState, useEffect} from 'react'
import apiCall from './apiCall'
import SearchResultsContainer from './SearchResultsContainer'

export default function SearchMeals(props) {

    const [userSearchInput, setUserSearchInput] = useState("")
    const [searchResults, setSearchResults] = useState({})

    function handleSearchInput(e) {
        setUserSearchInput(() => e.target.value)
    }
    
    async function submitSearch() {
        let input = userSearchInput.replace(" ", "+")
        let apiResults = await apiCall("search", input)
        setSearchResults(() => {
            return apiResults
        })
    }

    return (
        <div>
            <div className="recipeSearchContainer">
                <label>Search for a recipe: </label><br/>
                <span className="smallerFont">
                    <input value={userSearchInput} 
                        onChange={handleSearchInput} 
                        className="searchForm form-control input border-0 shadow-none"></input>
                    <button 
                    className="btn btn-outline-dark btn-lg shadow-none"
                    onClick={submitSearch}>Search</button>   
                </span>
            </div>
            <SearchResultsContainer
                searchResults={searchResults}
                selectedMeals={props.selectedMeals}
                inputSelectedMeal={props.inputSelectedMeal}
                setSelectedMeals={props.setSelectedMeals}
                />
        </div>
    )
}

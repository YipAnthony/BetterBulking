import React, {useState, useEffect} from 'react'
import apiCall from './apiCall'
import SearchResultsContainer from './SearchResultsContainer'
import FilterSearchContainer from './FilterSearchContainer'


export default function SearchMeals(props) {

    const [userSearchInput, setUserSearchInput] = useState("")
    const [searchResults, setSearchResults] = useState({})

    const [cuisineFilter, setCuisineFilter] = useState([])
    const [dietFilter, setDietFilter] = useState("")
    const [intoleranceFilter, setIntoleranceFilter] = useState([])
    const [sortFilter, setSortFilter] = useState("popularity")
    const [sortDirectionFilter, setSortDirectionFilter] = useState("desc")
    const [mealTypeFilter, setMealTypeFilter] = useState(["any"])

    function handleSearchInput(e) {
        let searchInput = e.target.value
        setUserSearchInput(() => searchInput)
    }
    
    const [currentResultPage, setCurrentResultPage] = useState(1)

    async function submitSearch(number) {
        let input = userSearchInput.replace(" ", "+")

        let offsetNumber = 0
        if(number) offsetNumber = (number*10) - 10 

        let apiResults = await apiCall(
            "search", 
            input, 
            {
                "cuisine":[...cuisineFilter],
                "offset": offsetNumber,
                "diet":dietFilter,
                "intolerance":[...intoleranceFilter],
                "sort": sortFilter,
                "sortDirection": sortDirectionFilter,
                "mealType": mealTypeFilter
            }
        )
        if (apiResults['code'] === 402) {
            alert('Daily API request quota exceeded')
            console.log(apiResults)
            return
        }
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
                    onClick={() => submitSearch(1)}>Search</button>   
                </span>
            </div>
            <FilterSearchContainer
                cuisineFilter={cuisineFilter}
                setCuisineFilter={setCuisineFilter}
                setDietFilter={setDietFilter}
                intoleranceFilter={intoleranceFilter}
                setIntoleranceFilter={setIntoleranceFilter}
                setSortFilter={setSortFilter}
                setSortDirectionFilter={setSortDirectionFilter}
                setMealTypeFilter={setMealTypeFilter}
            />
            <SearchResultsContainer
                searchResults={searchResults}
                selectedMeals={props.selectedMeals}
                inputSelectedMeal={props.inputSelectedMeal}
                setSelectedMeals={props.setSelectedMeals}
                currentResultPage={currentResultPage}
                setCurrentResultPage={setCurrentResultPage}
                submitSearch={submitSearch}
                />
        </div>
    )
}

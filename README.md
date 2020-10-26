# BetterBulking
10/24/2020 - present

Better Bulking is an app designed to simplify the process of weekly meal planning. The app allows users to directly search or import recipes, specify dietary restrictions and required calorie requirements, and generate a compiled shopping list. 

## Update Log

#### 10/26: thoughts on React state hooks
- In previous projects, I used the useState hook multiple times within a single component to create numerous states. These states only had one dimension (e.g., only array or only object) because it was recommended when I first learned about the useState hook. While this worked, the number of states became difficult to keep track of. For this project, I tried using states with multiple dimensions (e.g., the "selectedMeals" state is an array containing objects, containing arrays). This allowed me to have a single state to keep track of all the weekly meals and as a result I only needed one function to change the state. The biggest issue with this strategy was to design "pure functions" to prevent mutation of the previous state. For example:
    ```javascript
    props.setSelectedMeals(prev =>{
            let output = [...prev]
            output[index] = {...output[index], [day]:[...output[index][day], meal]}
            return output
        })
    ```
I'm also curious whether combining mutliple states into one is less efficient due to more re-renders. Will have to look into this more. 


## To Do: 

#### PromptUser Component
- [ ] Add calorie range limit warning

#### MealPlanner Component
- [ ] click on "X" shows pop-up containing meal details
    - [ ] Pop Up component (allow users to increase quanity or delete meal)
- [x] Sum daily calories on the bottom
- [ ] Sum weekly calories on the right

#### Search Meal Component
- [ ] add dropdown filters
    - [ ] cuisine: [link](https://spoonacular.com/food-api/docs#Cuisines)
    - [ ] settings button to toggle diet & intolerances
        - [ ] diet: [link](https://spoonacular.com/food-api/docs#Diets)
        * import from original page selection? 
        - [ ] intolerances: [link](https://spoonacular.com/food-api/docs#Intolerances)
    - [ ] filter by: [link](https://spoonacular.com/food-api/docs#Recipe-Sorting-Options)
        * use "sort" and "sortDirection" parameter in fetch request
        * sort values to use: popularity, price, calories, carbs, cholesterol, protein
    - [ ] use sort by popularity first, then set condition where if totalResults > 100, then sort via api, else create own algo to sort and save API points
        * results (aggregateLikes), 
    
- [ ] display indicating # total results/no results
- [ ] show 10 results at a time, add arrow to view next set of 10 recipes
    - [ ] change "number" parameter in fetch request from 10 to 100
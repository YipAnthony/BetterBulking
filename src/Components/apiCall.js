export default async function apiCall(endpoint, input, filters) {
    let api = "https://api.spoonacular.com/"
    let apiKey = "e97d3724da7547309276c1bfbc4609db"
    
    let cuisine = ""; 
    if (filters["cuisine"].length > 0) {
        cuisine += "&cuisine="
        filters["cuisine"].forEach(item => {
            cuisine += item + ","
        })
        cuisine = cuisine.substr(0, cuisine.length - 1)
    }

    let mealType = "&type=" + filters["mealType"]
    if (filters["mealType"] === "any") mealType = ""

    let diet = "&diet=" + filters["diet"]
    if (filters["diet"] === "") diet = ""

    let intolerances = ""; 
    if (filters["intolerance"].length > 0) {
        intolerances += "&intolerances="
        filters["intolerance"].forEach(item => {
            intolerances += item + ","
        })
        intolerances = intolerances.substr(0, intolerances.length - 1)
    }
    
    let sort = "&sort=" + filters["sort"]
    
    let sortDirection = "&sortDirection=" + filters["sortDirection"]

    let offsetNumber = "&offset=" + filters["offset"]

    if (endpoint === "search") {

        console.log(api + "recipes/complexSearch?apiKey=" + apiKey + 
        "&query=" + input + "&addRecipeNutrition=true" + 
        "&instructionsRequired=true" +
        cuisine + mealType + diet + intolerances + offsetNumber + sort + sortDirection)

        let response = await fetch(
            api + "recipes/complexSearch?apiKey=" + apiKey + 
            "&query=" + input + "&addRecipeNutrition=true" + 
            "&instructionsRequired=true" + "&number=20" +
            cuisine + mealType + diet + intolerances + offsetNumber + sort + sortDirection, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        return await response.json()

    }
}
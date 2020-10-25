export default async function apiCall(endpoint, input) {
    let api = "https://api.spoonacular.com/"
    let apiKey = "e97d3724da7547309276c1bfbc4609db"
    // let output = {}
    if (endpoint === "search") {
        let response = await fetch(
            api + "recipes/complexSearch?apiKey=" + apiKey + "&query=" + input + "&addRecipeNutrition=true", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        return await response.json()

    }
}
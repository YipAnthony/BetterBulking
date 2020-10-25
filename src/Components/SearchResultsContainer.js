import React from 'react'

export default function SearchResultsContainer(props) {

    let resultsArray = [];
    let isEmpty = Number(Object.keys(props.searchResults).length) === 0
    if (!isEmpty) {
        let haveResults = props.searchResults.results.length > 0;
        if (haveResults) {
            for (let i = 0; i < props.searchResults.results.length; i++){
                let item = props.searchResults.results[i]
                resultsArray.push(
                    <div key={item["id"]} className="singleRecipeResult d-flex">
                        <img className="singleRecipeResultImg" src={item["image"]} alt="Recipe"></img>
                        <div className="singleRecipeResultText">
                            <div className="singleRecipeResultTitle">{item["title"]}</div>
                            <div className="singleRecipeResult">{item["nutrition"]["nutrients"][0]["amount"]}kcal</div>
                        </div>
                    </div>
                )
            }
        }
    }
    
    return (
        <div>
            {resultsArray}
        </div>
    )
}

import React from "react";
import {Link} from 'react-router-dom';
function Mealcads({ detail }) {  // Destructure `detail` from props
    console.log(detail);

    return (
        <div className="meals">
            {!detail ? "Data not Found!" : detail.map((curItem) => {
                return (
                    <div key={curItem.idMeal} className="mealImg"> 
                        <img src={curItem.strMealThumb}  />
                        <p>{curItem.strMeal}</p>
                        <Link to={`/${curItem.idMeal}`}> <button>Recipe</button></Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Mealcads;

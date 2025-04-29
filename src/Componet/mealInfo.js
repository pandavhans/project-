import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MealInfo() {
  const { mealid } = useParams(); // Correct usage of useParams
  const [info, setInfo] = useState(null);

  useEffect(() => {
    getInfo();
  }, [mealid]); // Add mealid as a dependency to rerun when it changes

  function getInfo() {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((req) => req.json())
      .then((resp) => {
        setInfo(resp.meals ? resp.meals[0] : null); // Update state with fetched meal data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  console.log(info); // Log the info state to see the fetched data

  return (
    <div>
      {!info ? (<p>Data not Found!</p>) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} alt={info.strMeal} />
          <div className="Info">
            <h1>Recipe Deatil</h1>
            <button>{info.strMeal}</button> 
            <h3>Instruction's</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MealInfo;

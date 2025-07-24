import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Vegan () {
 const [meals, setMeals] = useState([]);
  async function ALLApi() {
    try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=vegan`);
    //   console.log(response.data); 
       setMeals(response.data.meals);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  }


useEffect(() => {
  ALLApi();
}, []);

  return <>
  <div className="All ">
    <div className="container">
        <div className="row">
          

   {meals?.map((meal, index) => (
        <div className="col-md-3 gy-4" key={index}>
         <div className="All-item">
 
          <img src={meal.strMealThumb} alt={meal.strMeal}  />
          <h3>{meal.strMeal}</h3>
       <Link to={`/Mealdetails/${meal.idMeal}`} > <button>View Recipe</button></Link>
         </div>
        </div>
      ))}

            </div>
        </div>
    </div>
</>
}
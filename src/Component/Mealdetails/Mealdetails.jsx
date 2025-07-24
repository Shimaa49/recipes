import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Mealdetails() 
{
let {idMeal}=useParams();
// console.log(idMeal)
const [getid,Setid]=useState(null)
console.log(idMeal)
  async function getdetails(idMeal){
    let respons=await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    Setid(respons.data.meals[0])
  
  }

  useEffect(() => {
    getdetails(idMeal);
  }, []);
  return <>

  <div className="details">
    <h2>{getid?.strMeal}</h2>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
             <div className="item-details">
                 <img src={getid?.strMealThumb} alt="title" />
         <div className="details-links">
         <button className='bg-danger'>   <Link to={getid?.strYoutube} className=' link'> <i className="fa-brands fa-youtube"></i>youtube</Link></button>
         <button className='bg-success'>  <Link to={getid?.strArea} className=' link'> <i className="fa-brands fa-youtube"></i>source</Link>
</button>
         </div>
             </div>

            </div>

<div className="col-md-4">
  <p>{getid?.strInstructions}</p>
</div>

<div className="col-md-4">
  <div className="ingredients">
    <h2>ingredients</h2>
      <hr/>
    <h3>{getid?.strIngredient1}:</h3>
   <span>{getid?.strMeasure1}</span>
<hr />

 <h3>{getid?.strIngredient2}:</h3>
   <span>{getid?.strMeasure2}</span>
<hr />

 <h3>{getid?.strIngredient3}:</h3>
   <span>{getid?.strMeasure3}</span>
<hr />

 <h3>{getid?.strIngredient3}:</h3>
   <span>{getid?.strMeasure3}</span>
<hr />

 <h3>{getid?.strIngredient4}:</h3>
   <span>{getid?.strMeasure4}</span>
<hr />

 <h3>{getid?.strIngredient5}:</h3>
   <span>{getid?.strMeasure5}</span>
<hr />

 <h3>{getid?.strIngredient6}:</h3>
   <span>{getid?.strMeasure6}</span>
<hr />

 <h3>{getid?.strIngredient7}:</h3>
   <span>{getid?.strMeasure7}</span>
<hr />

 <h3>{getid?.strIngredient8}:</h3>
   <span>{getid?.strMeasure8}</span>
<hr />
<h3>{getid?.strIngredient9}:</h3>
   <span>{getid?.strMeasure9}</span>

   <h3>{getid?.strIngredient10}:</h3>
   <span>{getid?.strMeasure10}</span>
<hr />

   <h3>{getid?.strIngredient11}:</h3>
   <span>{getid?.strMeasure11}</span>


<hr />


   <h3>{getid?.strIngredient12}:</h3>
   <span>{getid?.strMeasure12}</span>
   <hr />



   <h3>{getid?.strIngredient13}:</h3>
   <span>{getid?.strMeasure13}</span>
   <hr />



   <h3>{getid?.strIngredient14}:</h3>
   <span>{getid?.strMeasure14}</span>
   <hr />

  
  </div>
</div>
        </div>
    </div>
  </div>


  </>
}

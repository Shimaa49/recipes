import React from 'react'
import images from '../assets/recipe1.png'
export default function Sidebar() {
  return<>
  <div className="sidebar ">
  <div className='container '>



    <div className="logos">

 <img src={images} alt=""  />
</div>
<div className="catageirs">
    <ul>
        <li> Meals</li>
        <li>Ingredients</li>
        <li> Area</li>

    </ul>
</div>

</div>
  </div>
  </>
}

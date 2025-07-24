import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return <>
<nav>
    <div className="container ">
        <h1>Learn, Cook, Eat Your Food</h1>

 <ul className="links  ">
        <li  ><NavLink to={""}  className="nav-link" >All</NavLink></li>
        <li><NavLink to={"Beaf"}  className="nav-link" >Beaf</NavLink></li>
        <li ><NavLink to={"Breakfast"}  className="nav-link" >Breakfast</NavLink></li>
         <li ><NavLink to={"Chiken"}  className="nav-link">Chiken</NavLink></li>
   <li ><NavLink to={"Deesert"}  className="nav-link">Deesert</NavLink></li>
        <li ><NavLink to={"Goat"}  className="nav-link">Goat</NavLink></li>
        <li ><NavLink to={"Miscellaneous"}  className="nav-link">Miscellaneous</NavLink></li>
        <li ><NavLink to={"Pasta"}  className="nav-link">Pasta</NavLink></li>
        <li ><NavLink to={"Pork"}  className="nav-link">Pork</NavLink></li>
        <li ><NavLink to={"Seafood"}  className="nav-link">Seafood</NavLink></li>
        <li ><NavLink to={"Side"}  className="nav-link">Side</NavLink></li>
        <li ><NavLink to={"Vegan"}  className="nav-link">Vegan</NavLink></li>
        <li ><NavLink to={"Vegetarinan"}  className="nav-link">Vegetarinan</NavLink></li>
        < li><NavLink to={"Lamb"}  className="nav-link">Lamb</NavLink></li>

    </ul>
    </div>
</nav>


  </>
}
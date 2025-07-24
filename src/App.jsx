import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import All from './Component/All/All'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Beaf from './Component/Beaf/Beaf'
import Breakfast from './Component/Breakfast/Breakfast'
import Chiken from './Component/Chicken/Chiken'
import Deesert from './Component/Deesert/Deesert'
import Goat from './Component/Goat/Goat'
import Lamb from './Component/Lamb/Lamb'
import Miscellaneous from './Component/Miscellaneous/Miscellaneous'
import Pasta from './Component/Pasta/Pasta'
import Pork from './Component/Pork/Pork'
import Seafood from './Component/Sea/Seafood'
import Sidebar from './Component/Sidebar'
import Sarter from './Component/Starter/Sarter'
import Vegetarinan from './Component/Vegetarian/Vegetarinan'
import Layout from './Component/Layout/Layout'
// import All from './Component/All/All'
import Vegan from './Component/Vegan/vegan'
import Side from './Component/Side/Side'
import Mealdetails from './Component/Mealdetails/Mealdetails'
let x=createBrowserRouter([
{path:"",element:<Layout/>,children:[
{index:true,element:<All />} ,
{path:"Beaf",element:<Beaf />} ,
{path:"Breakfast",element:<Breakfast />} ,
{path:"Chiken",element:<Chiken />} ,
{path:"Deesert",element:<Deesert />} ,
{path:"Goat",element:<Goat/>} ,
{path:"Miscellaneous",element:<Miscellaneous />} ,
{path:"Pasta",element:<Pasta />} ,
{path:"Pork",element:<Pork/>} ,
{path:"Seafood",element:<Seafood />} ,

{path:"Side",element:<Side />} ,

{path:"Vegan",element: <Vegan/>} ,
{path:"Vegetarinan",element:<Vegetarinan/>} ,
{path:"Lamb",element:<Lamb/>} ,
{path:"Mealdetails/:idMeal",element:<Mealdetails/>} ,




]}
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  

<RouterProvider router={x}></RouterProvider>

    </>
  )
}

export default App

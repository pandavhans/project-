import React from 'react'
import Mainpage from './Componet/mainpage';
import MealInfo from './Componet/mealInfo'
import { Route,Router,Routes } from 'react-router-dom';

import './style.css'
function App(){
  return(
    <div className='App'>
      {/* <Mainpage/> */}
      <Routes>
        <Route path='/' element={<Mainpage/>}></Route>
        <Route path='/:mealid' element={<MealInfo/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
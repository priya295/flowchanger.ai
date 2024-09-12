import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Front from "./pages/create_users";
import Users  from './pages/users';
import Details from './pages/details'


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Front/>} />  
          <Route path='/users' element = {<Users/>}/>   
          <Route path='/details' element = {<Details/>}/>   
        </Routes>
    </BrowserRouter>
  )
}

export default App

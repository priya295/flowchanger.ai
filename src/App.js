import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Front from "./pages/create_users";
import Users  from './pages/users';
import Details from './pages/details'
import Filter from './pages/filter_selected'
import Admin from './Admin/Pages/overView'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Front/>} />  
          <Route path='/users' element = {<Users/>}/>   
          <Route path='/details' element = {<Details/>}/>
          <Route path='/filter' element = {<Filter/>}/>
          <Route path= '/admin/' element = {<Admin/>}/>
          
        </Routes>
    </BrowserRouter>
  )
}

export default App

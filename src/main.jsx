import React from 'react'
import ReactDOM from 'react-dom/client'
import Todo from './Todo/ToDo.jsx'
import Home from './Home/Home.jsx'

import {Routes, Route, BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/todo' element={<Todo />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

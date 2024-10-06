import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Signup from './components/Signup'
import Login from './components/Login'
import Search from './components/Search'
import BookSearch from './components/BookSearch'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/booksearch' element={<BookSearch />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
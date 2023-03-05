import React , { useState, useEffect }  from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Nav from '../../components/nav/Nav'

import Fav from '../Favourites/Fav'
import Playlist from '../Playlist/Playlist'
import Search from '../Search/Search'
import './Home.css'
import '../front/Front.css'

import Login from '../auth/Login'
import Front from '../front/Front'

export default function Home() {
 return(
    
    <Router>
        <div className="main-container">
            
            <Nav/>
            
        <Routes>
            

            <Route path='/' element={<Front/>} />
            <Route path='/Search' element={<Search/>} />
            <Route path='/Fav' element={<Fav/>} />
            <Route path='/Playlist' element={<Playlist/>} />

        </Routes>
        </div>
    </Router>
  )
}

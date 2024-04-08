import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { LoginScreen } from '../components/login/LoginScreen'
import { Navbar } from '../components/ui/Navbar'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<MarvelScreen />}></Route>
            <Route path='/marvel' element={<MarvelScreen />}></Route>
            <Route path='/dc' element={<DcScreen />}></Route>
            <Route path='/search' element={<SearchScreen />}></Route>
            <Route path='/login' element={<LoginScreen />}></Route>

        </Routes>
        
        
        
        
        </BrowserRouter>
  )
}

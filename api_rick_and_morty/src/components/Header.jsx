import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Personajes from './Personajes'
import Creadores from './Api creadores'

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <li>
                        
                    </li>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/personajes' element={<Personajes />}/>
                <Route path='/api creadores' element={<Creadores />}/>
            </Routes>
        </BrowserRouter>
    )
}


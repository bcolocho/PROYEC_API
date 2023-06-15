import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Personajes from './Personajes'
import Creadores from './Creadores'

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Personajes">Personajes</Link>
                    </li>
                    <li>
                        <Link to="/Creadores">Creadores</Link>
                    </li>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Personajes' element={<Personajes />}/>
                <Route path='/Creadores' element={<Creadores />}/>
            </Routes>
        </BrowserRouter>
    )
}


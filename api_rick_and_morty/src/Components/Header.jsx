import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Buscar from './Buscar'
import Personajes from './Personajes'
import Creadores from './Creadores'
import Home from './Home'
import BuscarPersonaje from './BuscarPersonaje'

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <nav className="navbar navbar-expand-lg fixed top navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/personajes'>Personajes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/buscar'>Buscar por personajes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/creadores'>Creadores</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex position-relative">
                        <button className="btn btn-success me-md-2" type="button">Logout</button>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/personajes" element={<Personajes />} />
                <Route path="/buscar" element={<Buscar />} />
                <Route path="/creadores" element={<Creadores />} />
<<<<<<< HEAD
<<<<<<< HEAD

=======
                <Route path="/busqueda" element={<BuscarPersonaje/>} />
>>>>>>> 86e7d9604a06a0f554965f8cc46f830b87afaaa9
=======
                <Route path="/busqueda" element={<BuscarPersonaje/>} />
>>>>>>> 5e3e444b91bdf9ed6e0a1b75b9ecc43dd2a1a609
            </Routes>
        </BrowserRouter>
    )
}












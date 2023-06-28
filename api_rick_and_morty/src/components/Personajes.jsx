import React, { useState, useEffect } from 'react'
import Paginacion from './Paginacion'
import axios from 'axios'
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'


export default function Personajes() {
  const [info, setInfo] = useState([]);
  const [Personage, setPersonage] = useState([]);
  const url = "https://rickandmortyapi.com/api/character"


  const obtenerPersonage = (url) => {
    axios.get(url).then((response) => {
      setPersonage(response.data.results);
      setInfo(response.data.info);
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleNextPage = () => {
    obtenerPersonage(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    obtenerPersonage(info.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    obtenerPersonage(url);
  }, []);


  return (

    <div className='container'>
      <h1 className='enlace fs-3 fw-bold text-center mt-5 text-white'>PERSONAJES</h1>
      <div>
        <nav>
          <ul className="pagination justify-content-center gap-3 mt-5">
            {info.prev ? (
              <li className="page-item">
                <button className="btn btn-success text-warning" onClick={handlePreviousPage}>Previous</button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="btn btn-success text-warning" onClick={handleNextPage}>Next</button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>

      <div className='row my-5'>
        {
          Personage.map((Person, index) => {
            return (

              <div className='col-lg-3 col-md-6 col-sm-12 my-4' key={index}>
                <div className="card">
                  <div className='face front'>
                    <img src={Person.image} className="img-fluid" alt="person" />
                    <h5>{Person.name}</h5>
                  </div>
                  <div className='face back'>
                    <h5>Detalles</h5>
                    <h5>{Person.name}</h5>
                    <p>Status: {Person.status}</p>
                    <p>Species: {Person.species}</p>
                    <p>Gender: {Person.gender}</p>
                    <p>Origin: {Person.origin.name}</p>
                    <p>Location: {Person.location.name}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <div>
        <nav>
          <ul className="pagination justify-content-center gap-3 mb-5">
            {info.prev ? (
              <li className="page-item">
                <button className="btn btn-success text-warning" onClick={handlePreviousPage}>Previous</button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="btn btn-success text-warning" onClick={handleNextPage}>Next</button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </div>

  )
}


import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function Personajes() {
  const [Personage, setPersonage] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  const obtenerPersonage = (url) => {
    axios.get(url).then((response) => {
      setPersonage(response.data.results);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    obtenerPersonage(url);
  }, []);

  return (
    <div className='container'>
      <h1 className='enlace fs-4 fw-bold text-center mt-4 text-white'>PERSONAJES</h1>
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
    </div>
  )
}


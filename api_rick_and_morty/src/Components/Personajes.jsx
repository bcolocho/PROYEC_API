import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Personajes() {
  const[personajes, setPersonajes]=useState([]);

  const obtenerPersonajes=()=>{
    axios.get("https://rickandmortyapi.com/api/character").then((response)=>{
        //console.log(response.data.results);
        setPersonajes(response.data.results);
    }).catch((error)=>{
        console.log(error);
    })
  }
  useEffect(() => {
    obtenerPersonajes();
  })
  console.log(personajes);
  return (
    <div className='container text-white'>
      <div className='row'>
        <div className="col-md-6">
        <h4 className=''>¿Quieres encontrar tus personajes favoritos?</h4>
          <p className=''>Disfruta de tus personajes de Ricky y Morty</p>
          <Link to='/busqueda' className='btn btn-primary'>Busca tu personaje favorito</Link>
        </div>
         
      </div>
      <h1>Personajes Rick & Morty</h1>
      <div className='row'>
        { 
            personajes.map((personaje, indice)=>{
              return(
                <div className='col-md-4' key={indice}>
                    <div className="card">
                        <img src={personaje.image} className="card-img-top" alt={personaje.name}/>
                        <div className="card-body">
                          <h5 className="card-title">{personaje.name}</h5>
                          <p className="card-text">{personaje.status}</p>
                          <p className="card-text">{personaje.gender}</p>
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

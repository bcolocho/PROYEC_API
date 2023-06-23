import React, {useState} from 'react'
import axios from 'axios'

export default function BuscarPersonaje() {

const[personajes, setPersonajes]=useState([]);
const[name, setName]=useState("");
//funcion para obtener el nombre del personaje
const obtenerPersonajeByNombre=()=>{
    axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`).then((response)=>{
        //console.log(response.data.results); 
        setPersonajes(response.data.results);
    }).catch((error)=>{
        console.log(error);
    })
}

//recibiendo los valores
const handleName=(e)=>{
  
    setName(e.target.value);

}
const handleSubmit=(e)=>{
  obtenerPersonajeByNombre();
  e.preventDefault();
}
//console.log(personajes);
  return (
    <div className='text-white'>
        <div className="container">
            <h1 className='text-center pb-2'>Encuentra a tu Personaje Favorito</h1>
            <div className="row pb-2">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="" className='pb-2'>Ingrese el nombre del personaje</label>
                        <input type="text" className='form-control mb-2' onChange={handleName}/>
                        <button  className="btn btn-primary" type='submit'>Ver Personaje </button>
                    </form>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <label htmlFor="" className='me-3'>Seleccione el estado del personaje</label>
                    <select name="" id="" className='me-3'>
                        <option value="VIVO">VIVO</option>
                        <option value="MUERTO">MUERTO</option>
                        <option value="DESCONOCIDO">DESCONOCIDO</option>
                    </select>
                    <button  className="btn btn-primary" type='submit'>Ver Personaje </button>
                </div>
            </div>
            {/**ingreso de personajes */}
            <br />
            <div className="row pb-2">
            {
                 personajes.length===0?(
                    <div className="alert alert-danger" role="alert">
                        No se encontro resultados
                  </div>
                  ):(
                    <>
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
                    </>
                  )
            }
            </div>
            
            
        </div>

    </div>
  )
}

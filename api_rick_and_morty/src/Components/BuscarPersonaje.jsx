import React, {useState} from 'react'
import axios from 'axios'

export default function BuscarPersonaje() {

const[personajes, setPersonajes]=useState([]);
const[name, setName]=useState("");
const[estados, setEstados]=useState("");
//funcion para obtener el nombre del personaje
const obtenerPersonajeByNombre=()=>{
    console.log(name.length);
    console.log(name);
    
        axios.get(`https://rickandmortyapi.com/api/character/?name=${name}&status=${estados}`).then((response)=>{
            //console.log(response.data.results); 
            setPersonajes(response.data.results);
        }).catch((error)=>{
            setPersonajes([]);
           
            console.log(error);
        })

  }

//recibiendo los valores
const handleName=(e)=>{
        setName(e.target.value) 
}
const handleClick=(e)=>{
    console.log(e.target.value);
    setEstados(e.target.value);  
}
const handleSubmit=(e)=>{
  obtenerPersonajeByNombre();
  e.preventDefault();
}

   

console.log(personajes);
  return (
    <div className='text-white'>
        <div className="container">
            <h1 className='text-center pb-2'>Encuentra a tu Personaje Favorito</h1>
            <div className="row pb-2">
                <div className="col-sm-12 col-md-6">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="" className='pb-2'>Ingrese el nombre del personaje</label>
                        <input type="text" className='form-control mb-2' onChange={handleName}/>
                        
                        <label htmlFor="" className='me-3'>Seleccione el estado del personaje</label>
                        <select name="" id="" className='me-3' onChange={handleClick}>
                            <option value="alive">VIVO</option>
                            <option value="dead">MUERTO</option>
                            <option value="unknown">DESCONOCIDO</option>
                        </select>
                        <button  className="btn btn-primary" type='submit'>Ver Personaje </button>
                    </form>
                </div>
                <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
                    {/* <label htmlFor="" className='me-3'>Seleccione el estado del personaje</label>
                    <select name="" id="" className='me-3'>
                        <option value="alive">VIVO</option>
                        <option value="dead">MUERTO</option>
                        <option value="unknown">DESCONOCIDO</option>
                    </select> */}
                    {/* <button  className="btn btn-primary boton" type='submit' onClick={handleClick}>Ver Personaje </button> */}
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

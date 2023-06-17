import React from 'react'
import rick_morty from '../assets/img/imagen_1.png'
import logo from '../assets/img/logo.png'
import frase from '../assets/img/frase.png'
import imagen from '../assets/img/diseño_1.png'


export default function Home() {
  return (
    <main>

        <section className='container py-5'>
            <div className='row'>
                <div className='col-md-8 text-white'>
                    <img src={logo} alt="logo_serie" className='img-fluid'/>
                    <p className='paragraph-descripcion fw-bolder fs-5'>
                        Rick, un científico alcohólico, secuestra a su influenciable nieto, Morty, para vivir peligrosas aventuras a través de nuestro cosmos y universos paralelos. <br />
                    </p>
                    <p className='paragraph-produccion-creacion fst-italic fs-6'>
                        <b>Protagonizada por:</b> Justin Roiland, Chris Parnell, Spencer Grammer. <br />
                        <b>Creada por:</b> Dan Harmon, Justin Roiland.
                    </p>
                </div>
                <div className='col-md-4 '>
                    <img src={rick_morty} alt="api_rick_and_morty" className='img-fluid' />
                </div>
            </div>

            <div className='container text-white  py-5 '>
                <p className="h5">API Creadores</p>
            </div>

            <div className='row d-flex justify-content-center'>
            <div className='container col-md-6 col-sm-12 py-5'>
                    <img src={imagen} alt="diseño" className='img-fluid w-75' />
                </div>
                <div className=' container col-md-6 col-sm-12 py-5'>
                    <img src={frase} alt="imagen_serie" className='img-fluid w-75'/>
                </div>
            </div> 

            <div className='container text-white py-5 mt-5'>
                <p className="h5">Personajes</p>
            </div>

        </section>

    </main>
  )
}

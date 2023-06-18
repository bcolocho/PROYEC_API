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

            <div className='container text-white py-5 mt-5 text-center'>
                <p className="h5">UNA RECORDADITA</p>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-md-sm-12'>
                        <iframe width="320" height="560" src="https://www.youtube.com/embed/G9WMb-xuORQ" title="#rickandmorty" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className='col-md-4 col-md-sm-12'>
                        <iframe width="320" height="560" src="https://www.youtube.com/embed/aBlRRk-qM88" title="#rickandmorty RickandMortyFullepisode #44" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className='col-md-4 col-md-sm-12'>
                        <iframe width="320" height="560" src="https://www.youtube.com/embed/0yS_xw0DTlU" title="#RickandMorty #RickandMortyFullepisode #RickandMorty #short 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

import React from 'react'
import rick_morty from '../assets/img/imagen_1.png'
import logo from '../assets/img/logo.png'
import imagen from '../assets/img/imagen.png'

export default function Home() {
    return (
        <main>
            <section className='container py-5'>
                <div className='row'>
                    <div className='col-md-8 text-white'>
                        <img src={logo} alt="logo_serie" className='img-fluid' />
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

                <div className='row py-5'>
                    <div className='imgserie col-md-4'>
                        <img src={imagen} alt="api_rick_and_morty" className='img-fluid' />
                    </div>

                    <div className='col-md-8 text-white py-5'>
                        <p className='paragraph-descripcion fw-bolder fs-3 text-info text-center'>
                            En este sitio web podrás realizar consulta de tus personajes. <br />
                        </p>

                        <p className='paragraph-produccion-creacion fst-italic fs-1 text-danger text-center'>
                            <b>¡WUBBA LUBBA DUB DUB!</b><br />

                        </p>
                    </div>
                </div>

                <div className='titulo text-white text-center py-4'>
                    <h2>Shorts</h2>
                    <h5 className='fst-italic'><b className='text-warning'>¡Esta es una recordadita!...</b> Disfrutalo. </h5>
                </div>

                <div className='shorts row gap-5 justify-content-center'>
                    <div className=" shorts1 col-lg-3 col-md-6">
                        <iframe width="200" height="350" src="https://www.youtube.com/embed/0yS_xw0DTlU" title="#RickandMorty #RickandMortyFullepisode #RickandMorty #short 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className=" shorts2 col-lg-3 col-md-6">
                        <iframe width="200" height="350" src="https://www.youtube.com/embed/aBlRRk-qM88" title="#rickandmorty RickandMortyFullepisode #44" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className=" shorts3 col-lg-3 col-md-6">
                        <iframe width="200" height="350" src="https://www.youtube.com/embed/qNm-5R21C6k" title="#rickandmorty" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className=" shorts4 col-lg-3 col-md-6">
                        <iframe width="200" height="350" src="https://www.youtube.com/embed/LuVdCKumTWU" title="#rickandmorty RickandMortyFullepisode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </main>
    )
}
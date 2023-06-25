import React from 'react'
import Bethzy from '../assets/img/Bethzy.png'
import Boris from '../assets/img/Boris.jpeg'
import Erick from '../assets/img/Erick.png'
import Hector from '../assets/img/Hector.jpeg'
import Isabel from '../assets/img/Isabel.jpeg'

import '../assets/css/Style_bethzy.css'




export default function Creadores() {
    return (
        <div className='container py-5'>
            <h1 className='text-center my-5 py-4'>Creadores</h1>
            <div className='row'>
                <div className='col-md-3  mt-5'>
                    <div class="card" >
                        <img src={Bethzy} class="imagen card-img-top rounded-circle py-3" alt="avatar"></img>
                        <div class="card-body">
                            <h5 class="card-title">Bethzabe Ramos</h5>
                            <p class="card-text">Web Developer</p>
                            <i class="fa-brands fa-square-github"></i>
                            <p> @Bethramos</p>
                
                        </div>
                    </div>
                </div>
                <div className='col-md-3 offset-md-1 mt-5'>
                    <div className="card">
                        <img src={Boris} class="imagen card-img-top rounded-circle py-3" alt="avatar"></img>
                        <div class="card-body">
                            <h5 class="card-title">Boris Colocho</h5>
                            <p class="card-text">Web Developer</p>
                            <i class="fa-brands fa-square-github"></i>
                            <p> @Bcolocho</p>
                            
                        </div>
                    </div>
                </div>
                <div className='col-md-3 offset-md-1 mt-5'>
                    <div class="card">
                        <img src={Erick} class="imagen card-img-top rounded-circle py-3" alt="avatar"></img>
                        <div class="card-body">
                            <h5 class="card-title">Erick Vasquez</h5>
                            <p class="card-text">Web Developer</p>
                            <i class="fa-brands fa-square-github"></i>
                            <p> @ErickVas</p>
                            
                        </div>
                    </div>
                </div>
                <div className='col-md-3 offset-md-2 mt-5'>
                    <div class="card">
                        <img src={Hector} class="imagen card-img-top rounded-circle py-3" alt="avatar"></img>
                        <div class="card-body">
                            <h5 class="card-title">Hector Linares</h5>
                            <p class="card-text">Web Developer</p>
                            <i class="fa-brands fa-square-github"></i>
                            <p> @Alejaan</p>
                            
                        </div>
                    </div>
                </div>

                <div className='col-md-3 offset-md-1 mt-5'>
                    <div class="card">
                        <img src={Isabel} class="imagen card-img-top rounded-circle py-3" alt="avatar"></img>
                        <div class="card-body">
                            <h5 class="card-title">Isabel Ramirez</h5>
                            <p class="card-text">Web Developer</p>
                            <i class="fa-brands fa-square-github"></i> 
                            <p> Isabelrm28</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
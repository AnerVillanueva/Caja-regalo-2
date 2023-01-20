import React from 'react'
import './Descripcion1.css'
import Paisaje from '../../assets/Paisaje.jpg'

const Descripcion1 = () => {
  return (
    <section id='descripcion1'>
        <div className="container Description__container">
            <div className="img-container">
                <img src={Paisaje} alt="" />
            </div>
            <div className='text-container'>
                <h5>¡ Mira que pedazo de vistas !</h5>
                <p>¿ Que es eso que veo ? ¿ Un viñedo ? </p>
                <p>En la lejania se ve un hotel, pero a los huespedes les gusta mas llamarlo "bodega".</p>
            </div> 
        </div>
    </section>
  )
}

export default Descripcion1
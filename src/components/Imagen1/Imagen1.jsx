import React from 'react'
import './Imagen1.css'
import Cama1 from '../../assets/FotoCama1.jpg'
import Cama2 from '../../assets/FotoCama2.jpg'
import Baño from '../../assets/Baño.jpeg'

const Descripcion1 = () => {
  return (
    <section id='descripcion1'>
        <div className="container img__container">
            <div className="img-container">
                <img src={Cama1} alt="" />
            </div>
        </div>
        <div className="container img__container">
            <div className="img-container">
                <img src={Cama2} alt="" />
            </div>
        </div>
        <div className="container img__container">
            <div className="img-container">
                <img src={Baño} alt="" />
            </div>
        </div>
        <br />
        <h5 className='mt'>Comienza la experiencia</h5>
        <div className='cta'>
            <a href="https://egurenugarte.com/bodega/"  className='btn portada'>
              <p className='centrado'> EGUREN UGARTE </p>
            </a>
        </div>
        <br/>
        <br/>
        <br/>
    </section>
  )
}

export default Descripcion1
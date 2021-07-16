import React from 'react'
import ImageGirl from '../assets/static/Mask-Group.png'
import '../assets/styles/Components/Header.scss'

const Header = () => {
    return(
        <header>
            <section className="Flyer">
            
                <h3 className="Flyer__new" >¡NUEVO!</h3>
                <h1 className="Flyer__title">Seguro Vehicular <br/> <strong> Tracking </strong></h1>
                <h2 className="Flyer__subt">Cuentanos donde le haras <br/> seguimiento a tu seguro</h2>
            
            </section>
            
            <img className="Header__girl" src={ImageGirl} alt="Imagen solicita tu seguro por internet" />
            
        </header>
    )
}

export default Header
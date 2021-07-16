import React from 'react'
import Fono from '../assets/static/ic_phone.png'
import '../assets/styles/Components/Contact.scss'

const Contac = () => {
    return(
        <a className="Header__contacto">
        <p className="Header__text">¿Tienes alguna duda?</p>
    
        <img className="foneI" src={Fono} alt="fono Rimac"/>
        <p className="llamanos">Llámanos</p>
        <p className="numero">(01) 411 6001</p>
    </a>
    )
}

export default Contac
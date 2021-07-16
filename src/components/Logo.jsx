import React from 'react'
import LogoRimac from'../assets/static/Logo-RIMAC.svg'
import '../assets/styles/Components/Logo.scss'

const Logo =() =>{
    return(
        <img className="logo" src={LogoRimac}alt="Logo Seguros Rimac" />
    )
}

export default Logo
import React from 'react'
//import '../assets/styles/Variable.scss'
import '../assets/styles/App.scss'
import Logo from '../components/Logo'
import Contac from '../components/Contact'
import Header from '../components/Header'
import FormL from '../components/Form'

const App = () => {
    return(
        <div className="App">
            <Logo/>
            <Contac/>
            <Header/>
            <FormL/>
        </div>
    )
} 

export default App

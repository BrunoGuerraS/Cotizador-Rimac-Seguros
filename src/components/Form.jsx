import React from 'react'
import '../assets/styles/Components/Form.scss'

const FormL = () => {
    return(
        
        <main>
            <h2 className="Formulario__title">Déjanos tus datos</h2>

        <form action="" method="GET">
            <div className="listD">
                <select name="Document" id="">
                    <option value="dni">DNI</option>
                    <option value="ce">CE</option>
                    <option value="pasaporte">PASAPORTE</option>
                </select>
                <input className="Name" type="text" type="text" placeholder="Nro. de doc" required />
            </div>
            
            <br />
            <input className="Phone" type="text" type="number" placeholder="Celular" required />
            <br />
            <input className="Placa" type="text" type="text" placeholder="Placa" required />
            <br />
            
            <div className="Check">
                <input type="checkbox" id="terminos" required/>

                <label htmlFor="teminos">Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.</label>

            </div>

            <br />
            
            <input className="btn" type="submit" />

        </form>
        </main>
    )

}

export default FormL 
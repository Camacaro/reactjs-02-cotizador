import React, { Component } from 'react';

class Formulario extends Component {
    
    /**
     * 
     * Funcion que se ejecutara al enviar el formulario,
     * Con refs leemos los datos de un formulario, se declaran y se adjunta en el formulario como un atributo ref={this.ref}
     */
    
    marcaRef        = React.createRef();
    yearRef         = React.createRef();
    planBasicoRef   = React.createRef();
    planCompletoRef = React.createRef();

    /**
     * 
     * Function declaretion 
     */
    /*cotizarSeguro(e){        
        //Prvenimos que se recargue la pagina        
        e.preventDefault();

        console.log(this.marcaRef);
    }*/

    /**
     * Arrow function
     */
    cotizarSeguro = (e) => {
        e.preventDefault();
        
        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';

        /**
         * Obteniendo los datos
         */
        const infoAuto = {
            marca:  this.marcaRef.current.value,
            year:   this.yearRef.current.value,
            plan:   plan,
        }

        /**
         * Pasar los datos al componente padre, cotizarSeguro es el props que enlanza con el padre
         */
        this.props.cotizarSeguro(infoAuto);

        /**
         * Resetear el formulario (opcional)
         */
        //e.currentTarget.reset();


    }
    
    render() {
        return (
            /**
             * Hay dos formas de enviar el valor utilizando el this
             * agregando en los onSubmit el .bind(this) y utilizando declaretion function *this.cotizarSeguro.bind(this)*, o
             * quitando el bind(this) pero la funcion tiene que ser arrow function
             */
            <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" ref={this.planBasicoRef} name="plan" value="basico"/> Básico
                    <input type="radio" ref={this.planCompletoRef} name="plan" value="completo"/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        );
    }
}

export default Formulario;
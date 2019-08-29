import React, { Component } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultados extends Component {
    render() {
        const resultado = this.props.resultado;

        const mensaje = (!resultado) ? 'Elige una marca, Año y Tipo de seguro' : 'El total es: $'

        /**
         * className="resultado" -> es de la clase de css
         */
        return (
            <div className="gran-total">
                {mensaje}
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition 
                        classNames="resultado"
                        key={resultado}
                        timeout={ {enter:500, exit:500} }
                    >
                        <span>{resultado}</span>
                    </CSSTransition>

                </TransitionGroup>
            </div>    
        );
    }
}

export default Resultados;
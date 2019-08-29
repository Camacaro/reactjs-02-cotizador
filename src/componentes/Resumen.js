import React, { Component } from 'react';
import { primeraMayuscula } from '../helpers';

class Resumen extends Component {
    
    mostrarResumen = () => {
         /**
         * Obteniendo los datos desde el state de App
         */
        const {marca, year, plan} = this.props.datos;

        if(!marca || !year || !plan) return null;

        return(
            <div className="resumen">
                <h2>Resumen de cotización</h2>
                <li>Maca: { primeraMayuscula(marca) }</li>
                <li>Plan: { primeraMayuscula(plan)}</li>
                <li>Año del Auto: {year}</li>
            </div>
        );

    }
    
    render() {
        return (
            <div>
                {this.mostrarResumen()}
            </div>
        );
    }
}

export default Resumen;
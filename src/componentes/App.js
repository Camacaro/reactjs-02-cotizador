import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helpers';
import Resumen from './Resumen';
import Resultados from './Resultados';

class App extends Component {

	/**
	 * Implementando el state para tener actualizado los demas componentes respecto a los datos 
	 */
	state = {
		resultado	: "",
		datos		: {}
	};
	
	/**
	 * Funcion que resivira datos del componente hijo
	 */
	cotizarSeguro = (datos) => {
		
		/**
		 * Destructuracio de los datos
		 */
		const {marca, year, plan} = datos;

		/**
		 * Monto base para la cotizacion
		 */
		let resultado = 2000;

		/**
		 * Obtenemos la diferencia de año
		 * Por cada año de diferencia respecto al actual disminuira el monto base un 3%
		 */
		const diferencia = obtenerDiferenciaAnio(year);
		resultado -= ( ( diferencia * 3 ) * resultado ) / 100 ;
		

		/**
		 * Dependiendo del modelo hay un aumento respecto al monto base
		 * Americano 15%, asiatico 5%, europeo 30%
		 */
		resultado = calcularMarca(marca) * resultado;

		/**
		 * Incremento del plan, si es basico aumente un 20% si es completo un 50%
		 * Lo redondeamos a 2 decimales
		 */
		let incrementoPlan = obtenerPlan(plan);
		resultado = parseFloat(resultado * incrementoPlan).toFixed(2);

		/**
		 * Insertamos los datos en el state
		 */
		this.setState({
			resultado,
			datos
		});
		
	}
	
	render() {
    	return (
      		<div className="contenedor">				
				<Header
					titulo='Cotizado de Seguro de Auto'
				/>

				<div className="contenedor-formulario">
					<Formulario
						cotizarSeguro={this.cotizarSeguro}
					/>

					<Resumen 
						datos={this.state.datos}
						resultado={this.state.resultado}
					/>

					<Resultados
						resultado={this.state.resultado}
					/>					
				</div>

      		</div>
    	);
  	}
}

export default App;

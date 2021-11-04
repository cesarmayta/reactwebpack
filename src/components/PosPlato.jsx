import React from 'react';

const PosPlato = ({ objPlato }) => {
	return (
		<div className="carta__plato">
			<img src="" alt="" />
			<h4 className="carta__titulo">CAUSA LIMEÑA</h4>
			<span className="carta__precio">S/ 15.00</span>
			<div className="carta__botones">
				<button className="boton boton-outline-primary boton-restar">-1</button>
				<button
					className="boton boton-outline-primary boton-sumar"
				>
					+1
				</button>
			</div>
		</div>
	);
};

export default PosPlato;

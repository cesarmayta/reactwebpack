import React, { useEffect } from 'react';
import PosPlato from './PosPlato';

const PosPlatos = () => {
	return (
		<div className="carta">
			<h3>
				Lista de Platos Categoria: &nbsp;{' '}
				<span className="color-secundario">Seleccione Categoria</span>
			</h3>

			<div className="carta__platos">
					<PosPlato />
			</div>
		</div>
	);
};

export default PosPlatos;

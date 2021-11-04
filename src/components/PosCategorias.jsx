import React from 'react';
import PosCategoria from './PosCategoria';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const PosCategorias = () => {
	
	return (
		<nav className="menu">
			<ul className="menu__lista">
							<PosCategoria
							/>
			</ul>
		</nav>
	);
};

export default PosCategorias;

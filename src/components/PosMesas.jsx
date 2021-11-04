import React from 'react';
import PosMesa from './PosMesa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const PosMesas = () => {
	return (
		<div className="mesas">
			<ul className="mesas__lista">
				<PosMesa/>
			</ul>
			<div className="mesas__info"></div>
		</div>
	);
};

export default PosMesas;

import React from 'react'
import PosCategorias from '../components/PosCategorias';
import PosHeader from '../components/PosHeader';
import PosMesas from '../components/PosMesas';
import PosPlatos from '../components/PosPlatos';

const Pos = () => {
    return (
		<>
			<PosHeader />
			<main className="pos-container">
				<PosCategorias />
				<section className="tabla">
					<PosMesas />
					<div className="pedido">
						<PosPlatos />
					</div>
				</section>
			</main>
		</>
    )
}

export default Pos

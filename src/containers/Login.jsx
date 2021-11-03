import React from 'react';
import '../styles/login.scss';

const Login = () => {
    return (
        <main className="login">
			<div className="login__form">
				<h1>Inicio de Sesión</h1>
				<form className="formulario">
					<label htmlFor="">Email:</label>
					<input
						type="email"
						className="formulario__input"
						placeholder="Email"
						name="correo"
					/>
					<label htmlFor="">Password:</label>
					<input
						type="password"
						className="formulario__input"
						placeholder="Password"
						name="password"
					/>
					<button className="formulario__submit" type="submit">
						Iniciar Sesión
					</button>
				</form>
			</div>
		</main>
    )
}

export default Login




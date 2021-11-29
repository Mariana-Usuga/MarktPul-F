import React, { useState } from "react";
import LoginImage  from './../imgs/philippe-tinembart-AECyP4zx5Y0-unsplash.jpg'
import SocialMediaButton from "../components/SocialMediaButton";

function Login () {
  const handlingForm = (event) =>{
    event.preventDefault()
  }
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return(
    <div className="login">
        <figure className="login__image">
            <img src={LoginImage} alt="Flea Market" />
        </figure>
        <section className='login__form'>
            <h1 className="login__form--title">Inicio de sesión</h1>
            <form action='submit' onSubmit={handlingForm} method="post" className="login__form--form">
                <label for="email">Correo Electrónico</label>
                <input type="email" name="email" id="email" placeholder="email@direccion.com" />
                <label for="password">Contraseña</label>
                <input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679; " />
                <div className="checkbox">
                 <input id='checkbox' type="checkbox" onClick={togglePasswordVisiblity}/>
                  <label for='checkbox'> Mostrar Contrasena</label>
                </div>
                <input type="button" value="Iniciar Sesión" className="login__button" />
            </form>
            <h4>¿No tienes cuenta?, <a href="/login" id='login__form--registro'>Registrate</a> ó ingrese con:</h4>
            <SocialMediaButton media='Google'/>
            <SocialMediaButton media='Facebook'/>
        </section>
    </div>
  )
}

export default Login

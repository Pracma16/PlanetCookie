import React from 'react';
import LoginForm from './components/LoginForm';
import './Home.scss'
import BotonesSecundarios from './components/BotonesSecundarios';

const Home = () => {
  return (
    <div className="home">
      <div className="welcome-section">
        <h1>Bienvenido</h1>
        <LoginForm />
        <p>¿No tienes cuenta? <BotonesSecundarios href="/register" text="Regístrate aquí"/></p>
      </div>
    </div>
  );
}

export default Home;



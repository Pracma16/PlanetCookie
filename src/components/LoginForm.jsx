import React, { useState } from 'react';
import Botones from './Botones';
import './LoginForm.scss';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Usuario:"
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Contraseña:"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <Botones text="Iniciar sesión"/>
    </form>
  );
};

export default LoginForm;

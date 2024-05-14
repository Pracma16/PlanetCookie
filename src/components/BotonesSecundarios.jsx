import React from 'react';
import './Botones.scss';

const BotonesSecundarios = ({ text, onClick }) => {
  return (
    <button className="custom-button-secundarios" onClick={onClick}>
      {text}
    </button>
  );
}

export default BotonesSecundarios;
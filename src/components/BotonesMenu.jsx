import React from 'react';
import './Botones.scss';

const BotonesMenu = ({ text, onClick }) => {
  return (
    <button className="custom-button-menu" onClick={onClick}>
      {text}
    </button>
  );
}

export default BotonesMenu;
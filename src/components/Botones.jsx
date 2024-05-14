import React from 'react';
import './Botones.scss';

const Botones = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Botones;

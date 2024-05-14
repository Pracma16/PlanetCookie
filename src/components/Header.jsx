
// import React, { useState } from 'react';
// import Botones from './Botones';
// import './Header.scss';
// import BotonesMenu from './BotonesMenu';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="header">
//       <nav className="nav">
//         <div className='logo'>
//           <img className="logo-image" src="/src/utils/image/PLANET-COOKIE.png" alt="Logo" />
//         </div>
        
//         <div className={`nav-items ${menuOpen ? 'open' : ''}`}>
//           {/* Botones del header */}
//           <BotonesMenu text="Inicio" />
//           <BotonesMenu text="Productos" />
//           <BotonesMenu text="Contactanos" />
//           <Botones text="Login"/>
//           <Botones text="Register"/>    
//         </div>
//         {/* Botón del menú hamburguesa */}
//         <div className="menu-toggle" onClick={toggleMenu}>
//           <div className={`menu-icon ${menuOpen ? 'open' : ''}`}></div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



//--------------------------------------------2

import React, { useState, useRef, useEffect } from 'react';
import Botones from './Botones';
import './Header.scss';
import BotonesMenu from './BotonesMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className='logo'>
          <img className="logo-image" src="/src/utils/image/PLANET-COOKIE.png" alt="Logo" />
        </div>
        
        <div ref={menuRef} className={`nav-items ${menuOpen ? 'open' : ''}`}>
          {/* Botones del header */}
          <BotonesMenu text="Inicio" />
          <BotonesMenu text="Productos" />
          <BotonesMenu text="Contactanos" />
          <Botones text="Login"/>
          <Botones text="Register"/>    
        </div>
        {/* Botón del menú hamburguesa */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;



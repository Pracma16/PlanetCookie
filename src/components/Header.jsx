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
        
//         <div className="nav-items">
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




//---------------------------------------------------2
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


//-----------------------------------------------3
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
        
//         {/* Botón del menú hamburguesa */}
//         <div className="menu-toggle" onClick={toggleMenu}>
//           <div className={`menu-icon ${menuOpen ? 'open' : ''}`}></div>
//         </div>

//         {/* Contenedor adicional para el menú */}
//         <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
//           <div className="menu">
//             {/* Botones del header */}
//             <BotonesMenu text="Inicio" />
//             <BotonesMenu text="Productos" />
//             <BotonesMenu text="Contactanos" />
//             <Botones text="Login"/>
//             <Botones text="Register"/>    
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


//-----------------------------------------4

import React, { useState, useEffect } from 'react';
import Botones from './Botones';
import './Header.scss';
import BotonesMenu from './BotonesMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Manejador de eventos para cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const closeMenu = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    // Agregamos el manejador de eventos al hacer clic en cualquier lugar de la pantalla
    document.addEventListener('click', closeMenu);

    // Limpiamos el manejador de eventos al desmontar el componente
    return () => document.removeEventListener('click', closeMenu);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className='logo'>
          <img className="logo-image" src="/src/utils/image/PLANET-COOKIE.png" alt="Logo" />
        </div>
        
        {/* Botón del menú hamburguesa */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Contenedor adicional para el menú */}
        <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
          <div className="menu">
            {/* Botones del header */}
            <BotonesMenu text="Inicio" />
            <BotonesMenu text="Productos" />
            <BotonesMenu text="Contactanos" />
            <Botones text="Login"/>
            <Botones text="Register"/>    
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

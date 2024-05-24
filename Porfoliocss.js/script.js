import React, { useState } from "react";

// Componente para el enlace
const Link = ({ children, onClick }) => (
  <a href="#" onClick={onClick}>
    {children}
  </a>
);

// Componente para el menú
const Menu = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div id="links">
      {["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5"].map(
        (opcion, index) => (
          <Link key={index} onClick={() => handleClick(index)}>
            {opcion}
          </Link>
        )
      )}
    </div>
  );
};

// Componente para el menú responsive
const ResponsiveMenu = () => {
  const [isResponsive, setResponsive] = useState(false);

  const toggleMenu = () => {
    setResponsive(!isResponsive);
  };

  return (
    <div id="nav" className={isResponsive ? "responsive" : ""}>
      <button onClick={toggleMenu}>Toggle Menu</button>
      <Menu />
    </div>
  );
};

export default ResponsiveMenu;

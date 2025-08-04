import React from 'react';

// O href="#" leva para o topo da página por padrão
function Header() {
  return (
    <header className="app-header">
      <h1>React News</h1>
      <a href="#" className="header-link">Início</a>
    </header>
  );
}

export default Header;
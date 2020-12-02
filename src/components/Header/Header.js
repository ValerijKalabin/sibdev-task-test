import './Header.css';
import categories from '../../data/categories';
import React from 'react';
import CategoryContext from '../../contexts/CategoryContext';

function Header() {
  const activeCategory = React.useContext(CategoryContext);

  return (
    <header className="header">
        <h1>{categories[activeCategory]}</h1>
    </header>
  );
}

export default Header;

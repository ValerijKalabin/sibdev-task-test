import './Header.css';
import './__title/Header__title.css';
import './__label/Header__label.css';
import './__input/Header__input.css';
import categories from '../../data/categories';
import React from 'react';
import CategoryContext from '../../contexts/CategoryContext';

function Header() {
  const activeCategory = React.useContext(CategoryContext);

  return (
    <header className="header">
        <h2 className="header__title">{categories[activeCategory]}</h2>
        <label className="header__label">
          <input className="header__input" type="text" name="search" placeholder="Какой магазин вам нужен?" />
        </label>
    </header>
  );
}

export default Header;

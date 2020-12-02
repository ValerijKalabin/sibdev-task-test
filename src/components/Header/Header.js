import './Header.css';
import './__title/Header__title.css';
import './__label/Header__label.css';
import './__input/Header__input.css';
import React from 'react';
import CategoryContext from '../../contexts/CategoryContext';

function Header({ onInputChange }) {
  const { text } = React.useContext(CategoryContext);

  return (
    <header className="header">
        <h2 className="header__title">{text}</h2>
        <label className="header__label">
          <input
            className="header__input"
            type="text"
            name="search"
            placeholder="Какой магазин вам нужен?"
            onChange={onInputChange}
          />
        </label>
    </header>
  );
}

export default Header;

import './Aside.css';
import './__logo/Aside__logo.css';
import './__logo-image/Aside__logo-image.css';
import './__logo-title/Aside__logo-title.css';
import './__menu/Aside__menu.css';
import './__list/Aside__list.css';
import './__button/Aside__button.css';
import logo from '../../images/logo.svg';
import categories from '../../data/categories';
import Category from '../Category/Category';
import buttonOpen from '../../images/icon-aside-closed.svg';
import buttonClose from '../../images/icon-aside-opened.svg';
import React from 'react';

function Aside({ onLogoClick, onCategoryClick }) {
  const [isOpened, setIsOpened] = React.useState(false);

  function handleClick() {
    setIsOpened(!isOpened);
  }

  return (
    <aside className={`aside ${isOpened && 'aside_opened'}`}>
      <div className={`aside__logo ${isOpened && 'aside__logo_opened'}`} onClick={onLogoClick}>
        <img className={`aside__logo-image ${isOpened && 'aside__logo-image_opened'}`} src={logo} alt="Логотип" />
        <h1 className={`aside__logo-title ${isOpened && 'aside__logo-title_opened'}`}>BECO</h1>
      </div>
      <menu className={`aside__menu ${isOpened && 'aside__menu_opened'}`}>
        <ul className="aside__list">
          {categories.map((category) => (
            <Category
              key={category.name}
              category={category}
              onCategoryClick={onCategoryClick}
              isOpened={isOpened}
            />
          ))}
        </ul>
      </menu>
      <button className="aside__button" onClick={handleClick}>
        <img className="aside__button-image" src={isOpened ? buttonClose : buttonOpen} alt="Кнопка" />
      </button>
    </aside>
  );
}

export default Aside;

import './Aside.css';
import './__logo/Aside__logo.css';
import './__logo-image/Aside__logo-image.css';
import './__logo-title/Aside__logo-title.css';
import './__menu/Aside__menu.css';
import './__list/Aside__list.css';
import './__item/Aside__item.css';
import './__btn/Aside__btn.css';
import './__image/Aside__image.css';
import './__text/Aside__text.css';
import './__stroke/Aside__stroke.css';
import logo from '../../images/logo.svg';
import React from 'react';
import CategoryContext from '../../contexts/CategoryContext';

function Aside({ onClick }) {
  const activeCategory = React.useContext(CategoryContext);

  return (
    <aside className="aside">
      <div className="aside__logo">
        <img className="aside__logo-image" src={logo} alt="Логотип" />
        <h1 className="aside__logo-title">BECO</h1>
      </div>
      <menu className="aside__menu">
        <ul className="aside__list">
          <li className="aside__item">
            <button className={`aside__btn ${activeCategory === 'catalog' && 'aside__btn_active'}`} type="button" name="catalog" onClick={onClick}>
              <div className="aside__image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={`aside__stroke ${activeCategory === 'catalog' && 'aside__stroke_active'}`} d="M10 3H3V10H10V3Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path className={`aside__stroke ${activeCategory === 'catalog' && 'aside__stroke_active'}`} d="M21 3H14V10H21V3Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path className={`aside__stroke ${activeCategory === 'catalog' && 'aside__stroke_active'}`} d="M21 14H14V21H21V14Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path className={`aside__stroke ${activeCategory === 'catalog' && 'aside__stroke_active'}`} d="M10 14H3V21H10V14Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <p className={`aside__text ${activeCategory === 'catalog' && 'aside__text_active'}`}>Каталог</p>
            </button>
          </li>
          <li className="aside__item">
            <button className={`aside__btn ${activeCategory === 'health' && 'aside__btn_active'}`} type="button" name="health" onClick={onClick}>
              <div className="aside__image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={`aside__stroke ${activeCategory === 'health' && 'aside__stroke_active'}`} d="M22 12H18L15 21L9 3L6 12H2" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <p className={`aside__text ${activeCategory === 'health' && 'aside__text_active'}`}>Здоровье</p>
            </button>
          </li>
          <li className="aside__item">
            <button className={`aside__btn ${activeCategory === 'beauty' && 'aside__btn_active'}`} type="button" name="beauty" onClick={onClick}>
              <div className="aside__image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={`aside__stroke ${activeCategory === 'beauty' && 'aside__stroke_active'}`} d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <p className={`aside__text ${activeCategory === 'beauty' && 'aside__text_active'}`}>Красота</p>
            </button>
          </li>
          <li className="aside__item">
            <button className={`aside__btn ${activeCategory === 'enjoy' && 'aside__btn_active'}`} type="button" name="enjoy" onClick={onClick}>
              <div className="aside__image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path className={`aside__stroke ${activeCategory === 'enjoy' && 'aside__stroke_active'}`} d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22M9 19C4 20.5 4 16.5 2 16L9 19Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className={`aside__text ${activeCategory === 'enjoy' && 'aside__text_active'}`}>Развлечения</p>
            </button>
          </li>
          <li className="aside__item">
            <button className={`aside__btn ${activeCategory === 'car' && 'aside__btn_active'}`} type="button" name="car" onClick={onClick}>
              <div className="aside__image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={`aside__stroke ${activeCategory === 'car' && 'aside__stroke_active'}`} d="M16 3H1V16H16V3Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path className={`aside__stroke ${activeCategory === 'car' && 'aside__stroke_active'}`} d="M16 8H20L23 11V16H16V8Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path className={`aside__stroke ${activeCategory === 'car' && 'aside__stroke_active'}`} d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path className={`aside__stroke ${activeCategory === 'car' && 'aside__stroke_active'}`} d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <p className={`aside__text ${activeCategory === 'car' && 'aside__text_active'}`}>Авто</p>
            </button>
          </li>
        </ul>
      </menu>
    </aside>
  );
}

export default Aside;

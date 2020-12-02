import './Aside.css';
import './__logo/Aside__logo.css';
import './__logo-image/Aside__logo-image.css';
import './__logo-title/Aside__logo-title.css';
import './__menu/Aside__menu.css';
import './__list/Aside__list.css';
import logo from '../../images/logo.svg';
import categories from '../../data/categories';
import Category from '../Category/Category';

function Aside({ onCategoryClick }) {
  return (
    <aside className="aside">
      <div className="aside__logo">
        <img className="aside__logo-image" src={logo} alt="Логотип" />
        <h1 className="aside__logo-title">BECO</h1>
      </div>
      <menu className="aside__menu">
        <ul className="aside__list">
          {categories.map((category) => (
            <Category
              key={category.name}
              category={category}
              onCategoryClick={onCategoryClick}
            />
          ))}
        </ul>
      </menu>
    </aside>
  );
}

export default Aside;

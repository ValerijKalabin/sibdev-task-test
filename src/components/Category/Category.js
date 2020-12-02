import './Category.css';
import './__btn/Category__btn.css';
import './__image/Category__image.css';
import './__text/Category__text.css';
import React from 'react';
import CategoryContext from '../../contexts/CategoryContext';

function Category({ category, onCategoryClick }) {
  const { name } = React.useContext(CategoryContext);

  function handleClick() {
    onCategoryClick(category);
  }

  return (
    <li className="category">
      <button
        className={`category__btn ${category.name === name && 'category__btn_active'}`}
        type="button"
        name={category.name}
        onClick={handleClick}
      >
        <div className="category__image">{category.icon}</div>
        <p className={`category__text ${category.name === name && 'category__text_active'}`}>
          {category.text}
        </p>
      </button>
    </li>
  );
}

export default Category;

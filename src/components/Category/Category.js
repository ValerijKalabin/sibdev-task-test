import './Category.css';
import './__btn/Category__btn.css';
import './__image/Category__image.css';
import './__text/Category__text.css';

function Category({ icon, text }) {
  return (
    <li className="category">
      <button className="category__btn" type="button">
        <img className="category__image" src={icon} alt={text} />
        <p className="category__text">{text}</p>
      </button>
    </li>
  );
}

export default Category;

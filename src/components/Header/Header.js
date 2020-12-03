import './Header.css';
import './__title/Header__title.css';
import './__label/Header__label.css';
import './__input/Header__input.css';
import './_narrow/Header_narrow.css';
import React from 'react';
import CategoryContext from '../../contexts/CategoryContext';

function Header({ onInputChange }) {
  const { text } = React.useContext(CategoryContext);
  const [isNarrowHeader, setIsNarrowHeader] = React.useState(false);
  const inputRef = React.useRef();
  const maxHeightForWideHeader = 80;

  function handleScroll() {
    if(inputRef.current.getBoundingClientRect().y < maxHeightForWideHeader) {
      setIsNarrowHeader(true);
    } else {
      setIsNarrowHeader(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isNarrowHeader && 'header_narrow'}`}>
        <h2 className="header__title">{text}</h2>
        <label className="header__label">
          <input
            className="header__input"
            type="text"
            name="search"
            placeholder="Какой магазин вам нужен?"
            onChange={onInputChange}
            ref={inputRef}
          />
        </label>
    </header>
  );
}

export default Header;

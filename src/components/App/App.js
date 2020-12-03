import React from 'react';
import './App.css';
import './__container/App__container.css';
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import Main from '../Main/Main';
import CategoryContext from '../../contexts/CategoryContext';
import SearchContext from '../../contexts/SearchContext';
import cards from '../../data/cards';

function App() {
  const [cardList, setCardList] = React.useState(cards);
  const [activeCategory, setActiveCategory] = React.useState({
    name: 'all',
    text: 'Главная'
  });

  function handleClickLogo() {
    setActiveCategory({
      name: 'all',
      text: 'Главная'
    });
  }

  function handleClickCategory(category) {
    setActiveCategory(category);
  }

  function handleChangeInput(event) {
    const newCardList = cards.filter((cardItem) => cardItem.title.includes(event.target.value));
    setCardList(newCardList);
  }

  return (
    <div className="app">
      <SearchContext.Provider value={cardList}>
      <CategoryContext.Provider value={activeCategory}>
        <Aside
          onCategoryClick={handleClickCategory}
          onLogoClick={handleClickLogo}
        />
        <div className="app__container">
          <Header onInputChange={handleChangeInput} />
          <Main />
        </div>
      </CategoryContext.Provider>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

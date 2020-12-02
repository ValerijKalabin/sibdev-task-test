import React from 'react';
import './App.css';
import './__container/App__container.css';
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import Main from '../Main/Main';
import CategoryContext from '../../contexts/CategoryContext';

function App() {
  const [activeCategory, setActiveCategory] = React.useState('beco');

  function handleClickCategory(event) {
    setActiveCategory(event.currentTarget.name);
  }

  return (
    <div className="app">
      <CategoryContext.Provider value={activeCategory}>
        <Aside onClick={handleClickCategory} />
        <div className="app__container">
          <Header />
          <Main />
        </div>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;

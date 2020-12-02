import './Main.css';
import Card from '../../components/Card/Card';
import React from 'react';
import SearchContext from '../../contexts/SearchContext';

function Main() {
  const cardList = React.useContext(SearchContext);
  return (
    <main className="main">
      {cardList.map((card, index) => (
        <Card key={'card' + index} card={card} />
      ))}
    </main>
  );
}

export default Main;

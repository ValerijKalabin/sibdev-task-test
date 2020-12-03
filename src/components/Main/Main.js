import './Main.css';
import './__cards/Main__cards.css';
import Card from '../../components/Card/Card';
import React from 'react';
import SearchContext from '../../contexts/SearchContext';

function Main() {
  const cardList = React.useContext(SearchContext);
  return (
    <main className="main">
      <section className="main__cards">
        {cardList.map((card, index) => (
          <Card key={'card' + index} card={card} />
        ))}
      </section>
      <div className="out">
        <div className="in" />
      </div>
    </main>
  );
}

export default Main;

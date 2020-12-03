import './Card.css';
import './__image/Card__image.css';
import './__info/Card__info.css';
import './__title/Card__title.css';
import './__subtitle/Card__subtitle.css';
import './__sale/Card__sale.css';
import './__action/Card__action.css';
import './_hidden/Card_hidden.css';
import './__substrate/Card__substrate.css';
import './__top/Card__top.css';
import './__bottom/Card__bottom.css';
import './__triangle/Card__triangle.css';
import React from 'react';
import CategoryContext from '../../contexts/CategoryContext';

function Card({ card }) {
  const { name } = React.useContext(CategoryContext);
  const isHidden = name !== 'all' && card.category !== name;

  return (
    <div className={`card__substrate ${isHidden && 'card_hidden'}`}>
      <div className="card">
        <div className="card__info">
          <div className="card__name">
            <h3 className="card__title">{card.title}</h3>
            <p className="card__subtitle">{card.subtitle}</p>
          </div>
          <div className="card__promo">
            <h3 className="card__sale">{card.sale}</h3>
            <p className="card__action">{card.action}</p>
          </div>
        </div>
        <img className="card__image" src={card.image} alt={card.title} />
        <div className="card__triangle card__triangle_position_left" />
        <div className="card__triangle card__triangle_position_right" />
      </div>
      <div className="card__top" />
      <div className="card__bottom" />
    </div>
  );
}

export default Card;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then(data => setCards(data));
  }, []);

  return (
    <div className="content">
      <h1>Card List</h1>
      <div className="card-list">
        {cards.map(card => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.name} />
            <div className="card-details">
              <h2>{card.name}</h2>
              <p>${card.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
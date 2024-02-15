import React, { useState } from 'react';

function SubmitCard() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/cards', {
      method: 'POST',
      body: JSON.stringify({ name, image, price }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="content">
      <h1>List your own Card.</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitCard;
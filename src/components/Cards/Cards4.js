import React, { useState, useEffect } from 'react';
import './Cards1.css';

function Cards4({ title }) {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    // Fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/items'); // Replace with your API endpoint
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

//   const handleAddItem = () => {
//     setItems([...items, newItem]);
//     setNewItem('');
//   };

  return (
    <div className='card-container'>
      <div className='card-title'>
        <h3>{title}</h3>
      </div>
      <div className='card-body'>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {/* <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
        /> */}
        {/* <button onClick={handleAddItem}>Add Item</button> */}
      </div>
    </div>
  );
}

export default Cards4;

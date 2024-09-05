import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddGamePage() {
  const [newGame, setNewGame] = useState({
    name: '',
    players: '',
    duration: '',
    rating: '',
    description: '',
    image: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewGame({ ...newGame, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const games = JSON.parse(localStorage.getItem('games')) || [];
    newGame.id = Date.now(); // Simple ID generation
    games.push(newGame);
    localStorage.setItem('games', JSON.stringify(games));
    navigate('/');
  };

  return (
    <div>
      <h1>Add a New Game</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="players" placeholder="Players" onChange={handleChange} required />
        <input type="text" name="duration" placeholder="Duration" onChange={handleChange} required />
        <input type="text" name="rating" placeholder="Rating" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
}

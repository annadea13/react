import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


export default function EditGamePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState({
    name: '',
    players: '',
    duration: '',
    rating: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    const games = JSON.parse(localStorage.getItem('games')) || [];
    const currentGame = games.find(g => g.id === parseInt(id));
    if (currentGame) {
      setGame(currentGame);
    }
  }, [id]);

  const handleChange = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const games = JSON.parse(localStorage.getItem('games')) || [];
    const updatedGames = games.map(g => g.id === parseInt(id) ? { ...g, ...game } : g);
    localStorage.setItem('games', JSON.stringify(updatedGames));
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Game</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={game.name} onChange={handleChange} required />
        <input type="text" name="players" value={game.players} onChange={handleChange} required />
        <input type="text" name="duration" value={game.duration} onChange={handleChange} required />
        <input type="text" name="rating" value={game.rating} onChange={handleChange} required />
        <textarea name="description" value={game.description} onChange={handleChange} required></textarea>
        <input type="text" name="image" value={game.image} onChange={handleChange} />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function GameCard({ game }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this game?");
    if (confirmDelete) {
      const savedGames = JSON.parse(localStorage.getItem('games')) || [];
      const updatedGames = savedGames.filter(g => g.id !== game.id);
      localStorage.setItem('games', JSON.stringify(updatedGames));
      navigate(0); // Refresh the page
    }
  };

  return (
  <div className="game-card">
    <img
      src={game.image || "https://placehold.co/600x400?text=No+Image+Available"}
      alt={game.name}
      className="game-image"
    />
    <h2>{game.name}</h2>
    <p>Players: {game.players}</p>
    <p>Duration: {game.duration}</p>
    <p>Rating: {game.rating}</p>
    <p>{game.description}</p>
    <Link to={`/users/${game.id}`}>View Details</Link>
    <button onClick={handleDelete}>Delete</button>
  </div>
  );
}

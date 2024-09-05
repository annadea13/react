import React, { useEffect, useState } from 'react';
import GameCard from '../components/GameCard';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [games, setGames] = useState([]);
  const [users,setUsers]= useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedGames = JSON.parse(localStorage.getItem('games'));
    if (savedGames) {
      setGames(savedGames);
    } else {
      fetchGames();
    }
  }, []);

  async function fetchGames() {
    try {
      const response = await fetch("https://raw.githubusercontent.com/annadea13/reactthing/main/mvpReact/games.json");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setGames(data);
      localStorage.setItem('games', JSON.stringify(data)); // Save to localStorage
    } catch (error) {
      console.error('Failed to fetch games:', error);
    }
  }

  const filteredUsers = users.filter(user =>user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section className="page">
      <form className="grid-filter" role="search">
        <label>
          Search By Name
          <input placeholder="Search" type="search" onChange={(e) => setSearchTerm(e.target.value)} />
        </label>
      </form>
  
      <div className="page">
        <h1>Game Overview</h1>
        <Link to="/add">Add New Game</Link>
        <section className="grid">
          {filteredUsers.map(user => (
            <User user={game} key={game.id} />
          ))}
  
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </section>
      </div>
    </section>
  );
  
}
  
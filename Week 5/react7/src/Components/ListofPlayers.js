import React from 'react';

// Displays all players
export function ListofPlayers({ players }) {
  return (
    <div>
      <ul>
        {players.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Displays players with score <= 70
export function Scorebelow70({ players }) {
  // ES6 Arrow function filter
  const players70 = players.filter((item) => item.score <= 70);

  return (
    <div>
      <ul>
        {players70.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
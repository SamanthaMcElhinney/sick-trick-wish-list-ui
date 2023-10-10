import React from "react";
import './Card.css'

export default function Card({trick, deleteTrick}){

    return (
      <div className="card">
        <button onClick={() => deleteTrick(trick.id)}>Delete</button>
        <p>{trick.stance} {trick.name}</p>
        <p>Obstacle:{trick.obstacle}</p>
        <p>Linke to Tutorial:</p>
            <a href={trick.tutorial}>{trick.tutorial}</a>
      </div>
    );
}
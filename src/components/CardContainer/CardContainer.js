import React from "react";
import Card from "../Card/Card"
import './CardContainer.css'

export default function CardContainer({tricks, deleteTrick}) {
    const cards = tricks.map(trick => 
        <Card
            key= {trick.id}
            trick = {trick}
            deleteTrick={deleteTrick}
        />
        )
    return (
        <div className="card-container">
            {cards.length ? cards : <p classname="error">Sorry no tricks to show!</p>}
        </div>
    )
}
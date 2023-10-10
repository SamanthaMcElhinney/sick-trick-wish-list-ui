import './App.css';
import React, {useState, useEffect} from 'react';
import {getTricks, postTrick, deleteTrickFromAPI} from "../Api"
import CardContainer from "../CardContainer/CardContainer"
import Form from "../Form/Form"

function App() {
  const [tricks, setTricks] = useState([])
  const [error, setError] = useState('')

  useEffect(()=> {
      getTricks()
        .then((data) => {
          setTricks(data);
          setError("");
        })
        .catch((err) => setError(err.toString()));  
  },[]) 

  const addTrick = (newTrick) => {
    postTrick(newTrick)
      .then((data) => {
        setTricks([...tricks, data]);
        setError("");
      })
      .catch((error) => setError(error.toString()));
  }

const deleteTrick = (id) => {
  deleteTrickFromAPI(id)
    .then(() => {
      const filteredTricks = tricks.filter((trick) => id !== trick.id);
      setTricks(filteredTricks);
    })
    .catch((error) => setError(error.toString()));
};

  return (
    <div className="App">
      {error && <p className="error-message">{error}</p>}
      <h1>Sick Trick Wish List</h1>
      <CardContainer tricks={tricks} deleteTrick={deleteTrick}/>
      <Form addTrick={addTrick}/>
    </div>
  );
}

export default App; 

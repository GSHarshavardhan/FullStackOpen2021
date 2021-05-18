import React, { useState } from "react";

const Anecdote = ({ qoute, votes }) => (
  <div>
    <p>{qoute}</p>
    <p>has {votes} votes</p>
  </div>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(6).fill(0));

  const randInt = () => Math.floor(Math.random() * 6);

  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };
  
  const getQuote = () => {
    let idx = randInt();
    while (selected === idx) {
      idx = randInt();
    }
    setSelected(idx);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote qoute={anecdotes[selected]} votes={points[selected]} />
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={getQuote} text="Next Anecdote" />
      <h2>Anecdote with the most votes</h2>
      <Anecdote
        qoute={anecdotes[points.indexOf(Math.max(...points))]}
        votes={Math.max(...points)}
      />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(props.anecdotes.length).fill(0));

  console.log(vote);

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  };

  const handleVote = () => {
    const newVote = [...vote];
    newVote[selected] += 1;
    setVote(newVote);
  };

  const mostVoted = (votes, anecdotes) => {
    let i = votes.indexOf(Math.max(...votes));
    return (
      <>
        <p>{anecdotes[i]}</p>
        <p>Has {votes[i]}</p>
      </>
    );
  };

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <h>Anecdote with most votes</h>
      <div>{mostVoted(vote, props.anecdotes)}</div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));

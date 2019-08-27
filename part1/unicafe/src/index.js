import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const calcAverage = () => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return 0;
    }
    return (good - bad) / (good + neutral + bad);
  };

  const calcPositive = () => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return 0;
    }
    return good / (good + neutral + bad);
  };

  return (
    <div>
      <h1>ive feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {calcAverage()}</p>
      <p>positive {calcPositive()} %</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

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

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <h2>statistics</h2>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        calcAverage={calcAverage}
        calcPositive={calcPositive}
      />
    </div>
  );
};

const Statistics = ({ good, neutral, bad, calcAverage, calcPositive }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return "No feedback given";
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <tr>
          <td>all</td>
          <td>{good + neutral + bad}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{calcAverage()}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{calcPositive()} %</td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

ReactDOM.render(<App />, document.getElementById("root"));

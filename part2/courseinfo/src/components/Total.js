import React from "react";

const Total = props => {
  const calcul = () => {
    return props.parts.reduce((total, exo) => {
      return total + exo.exercises;
    }, 0);
  };

  return (
    <>
      <p>
        <strong>total of {calcul()} exercises</strong>
      </p>
    </>
  );
};

export default Total;

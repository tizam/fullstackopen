import React from "react";

import Part from "./Part";

const Content = props => {
  return (
    <>
      {props.parts.map((part, i) => (
        <Part
          key={props.parts[i].name}
          name={props.parts[i].name}
          exercises={props.parts[i].exercises}
        />
      ))}
    </>
  );
};

export default Content;

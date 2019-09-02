import React from "react";

import Course from "./components/Course";

const App = props => {
  return (
    <>
      <Course course={props.course} />
    </>
  );
};

export default App;

import React from "react";

const Persons = ({ personas, filter }) => {
  return (
    <div>
      {personas
        .filter(persona => persona.name.toLowerCase().includes(filter))
        .map(persona => (
          <p key={persona.name}>
            {persona.name} {persona.number}
          </p>
        ))}
    </div>
  );
};

export default Persons;

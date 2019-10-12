import React from "react";

const Persons = ({ personas, filter, deletePersona }) => {
  return (
    <div>
      {personas
        .filter(persona => persona.name.toLowerCase().includes(filter))
        .map(persona => (
          <p key={persona.name}>
            {persona.name} {persona.number}{" "}
            <button onClick={() => deletePersona(persona)}>delete</button>
          </p>
        ))}
    </div>
  );
};

export default Persons;

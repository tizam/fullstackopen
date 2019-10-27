import React from "react";

const Person = ({ persons, filter, handleDelete }) =>
  persons
    .filter(person => person.name.toLowerCase().includes(filter))
    .map(person => (
      <li key={person.name}>
        {person.name} {"  "} {person.number} {"  "}{" "}
        <button onClick={() => handleDelete(person)}>delete</button>
      </li>
    ));

export default Person;

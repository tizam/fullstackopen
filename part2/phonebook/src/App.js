import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {
  const [personas, setPersonas] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(response => {
      //console.log(response);
      setPersonas(response.data);
    });
  }, []);

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleFilter = event => {
    setFilter(event.target.value.toLowerCase());
  };

  const addPersonas = event => {
    event.preventDefault();

    const duplicate = personas.find(persona => {
      return persona.name === newName;
    });

    if (newName === "") {
      return;
    }

    if (duplicate) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
    } else {
      setPersonas([...personas, { name: newName, number: newNumber }]);
      axios.post("http://localhost:3001/persons", {
        name: newName,
        number: newNumber
      });
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>Add New</h2>
      <PersonForm
        addPersonas={addPersonas}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <hr />
      <Persons personas={personas} filter={filter} />
    </div>
  );
}

export default App;

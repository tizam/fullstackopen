import React, { useState } from "react";

function App() {
  const [personas, setPersonas] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

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
      setNewName("");
      setNewNumber("");
    }

    // console.log("personas: ", personas);
    // console.log(typeof personas);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <input onChange={handleFilter} />
      </div>
      <h2>Add New</h2>
      <form onSubmit={addPersonas}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={handleNumberChange}
            type="number"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <hr />
      <div>
        {personas
          .filter(persona => persona.name.toLowerCase().includes(filter))
          .map(persona => (
            <p key={persona.name}>
              {persona.name} {persona.number}
            </p>
          ))}
      </div>
    </div>
  );
}

export default App;

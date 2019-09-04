import React, { useState } from "react";

function App() {
  const [personas, setPersonas] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = event => {
    setNewName(event.target.value);
  };

  const addPersonas = event => {
    event.preventDefault();
    setPersonas([...personas, { name: newName }]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersonas}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <hr />
      <div>
        {personas.map(persona => (
          <p key={persona.name}>{persona.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;

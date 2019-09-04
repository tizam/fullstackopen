import React, { useState } from "react";

function App() {
  const [personas, setPersonas] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = event => {
    setNewName(event.target.value);
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
      console.log("false");
      setPersonas([...personas, { name: newName }]);
      setNewName("");
    }

    console.log("personas: ", personas);
    console.log(typeof personas);
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

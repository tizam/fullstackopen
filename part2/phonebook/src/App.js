import React, { useState, useEffect } from "react";

import phoneServices from "./services/persons";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // fetch data from server
  useEffect(() => {
    phoneServices
      .getAll()
      .then(data => setPersons(data))
      .catch(err => console.log(err));
  }, []);

  // handle changes
  const handleInputName = e => {
    setNewName(e.target.value);
  };

  const handleInputNumber = e => {
    setNewNumber(e.target.value);
  };

  const handleFilter = e => {
    setFilter(e.target.value.toLowerCase());
  };

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();

    // check if input is submited empty
    if (newName === "") {
      return;
    }

    // check if the added person exists in db
    const duplicate = persons.find(person => person.name === newName);
    if (duplicate) {
      const confirm = window.confirm(
        `${duplicate.name} is already added to the phonebook, replace the old number with the new one ?`
      );
      if (confirm) {
        const updatedPerson = { ...duplicate, number: newNumber };
        phoneServices
          .updatePerson(duplicate.id, updatedPerson)
          .then(() => {
            setPersons(
              // check each person
              // if the id of the person is equal to the id of the duplicate then update
              // if not, do nothing
              persons.map(p => (p.id !== duplicate.id ? p : updatedPerson))
            );
            setNewName("");
            setNewNumber("");
          })
          .catch(err => console.log(err));
      }
    } else {
      // add new person to db
      const newPerson = { name: newName, number: newNumber };
      phoneServices
        .addPerson(newPerson)
        .then(res => {
          setPersons([...persons, res]);
        })
        .catch(err => console.log(err));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleDelete = person => {
    const personsAfterDelete = persons.filter(p => p.id !== person.id);
    const confirm = window.confirm(`delete ${person.name} ?`);
    if (confirm) {
      setPersons(personsAfterDelete);
      phoneServices.removePerson(person.id).catch(err => console.log(err));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>Add New</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        handleInputName={handleInputName}
        handleInputNumber={handleInputNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <ul>
        <Person persons={persons} filter={filter} handleDelete={handleDelete} />
      </ul>
    </div>
  );
};

export default App;

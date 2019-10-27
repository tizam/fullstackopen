import React from "react";

const PersonForm = ({
  handleSubmit,
  handleInputName,
  handleInputNumber,
  newName,
  newNumber
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      name: <input value={newName} onChange={handleInputName} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleInputNumber} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default PersonForm;

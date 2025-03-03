import React from "react";

function Select({ options, select, id, name, handleInput }) {
  return (
    <select
      className="form-select"
      id={id}
      onChange={handleInput}
      name={name}
      aria-label="Default select example"
    >
      <option selected value={undefined}>
        {select}
      </option>
      {options.map((title, i) => (
        <option key={i} value={title}>
          {title}
        </option>
      ))}
    </select>
  );
}

export default Select;

import React from "react";

function Select({ options, select, id, name, handleChange }) {
  return (
    <select
      className="form-select"
      id={id}
      name={name}
      aria-label="Default select example"
      onChange={handleChange}
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

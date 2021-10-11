import React from "react";

function Select({ options, select, id, name, register }) {
  return (
    <select
      className="form-select"
      id={id}
      {...register(`${name}`)}
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

import React from "react";

function Select({ options, select, id, name, handleChange, type }) {
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
      {type === "branchs" ? (
        <>
          {options.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </>
      ) : type === "services" ? (
        <>
          {options.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </>
      ) : (
        <>
          {options.map((title, i) => (
            <option key={i} value={title}>
              {title}
            </option>
          ))}
        </>
      )}
    </select>
  );
}

export default Select;

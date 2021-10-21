import { useState } from "react";
import Select from "../Body/Select";

function Body_Steps_Section({
  handleInputs,
  id,
  select,
  name,
  header = false,
  options,
  type
}) {
  const [input, setInput] = useState();
  const handleInput = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
    handleInputs(input);
  };
  return (
    <div className="body-step-section">
      <div className="informition">
        <Select
          id={id}
          name={name}
          select={select}
          handleInput={handleInput}
          options={
            header
              ? options
              : ["سليم", "رش", "تعديل", "لحام", "معجون", "حكه", "ضربه", "تغيير"]
          }
          select={select}
        />
        {!header ? (
          <textarea
            className="form-control mt-3"
            placeholder="ملاحظات"
            id={"note-" + id}
            name={"note-" + name}
            onChange={handleInput}
          ></textarea>
        ) : (
          <></>
        )}
      </div>
      {!header ? (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Vp7Pwkg1fNqhope5G0NBnN1BHX6DXAsHxQ&usqp=CAU"
          alt=""
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Body_Steps_Section;

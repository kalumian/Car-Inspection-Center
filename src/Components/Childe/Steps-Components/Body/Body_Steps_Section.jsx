import { useState } from "react";
import Select from "../Body/Select";

function Body_Steps_Section({
  handleInputs,
  id,
  select,
  name,
  typeOfCar,
  type,
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
    <div className="body-step-section" onClick={() => console.log(input)}>
      <div className="informition">
        <Select
          id={id}
          name={name}
          select={select}
          handleInput={handleInput}
          options={[
            "سليم",
            "رش",
            "تعديل",
            "لحام",
            "معجون",
            "حكه",
            "ضربه",
            "تغيير",
          ]}
        />
        <textarea
          className="form-control mt-3"
          placeholder="ملاحظات"
          id={"note_" + id}
          name={"note_" + name}
          onChange={handleInput}
        ></textarea>
      </div>
      {/* {typeOfCar === "Crossover" ? (
        type === "behinde" ? (
          <img src="https://c.top4top.io/p_2280zwl151.jpg" width={"250px"} alt="behinde" />
        ) : type === "right" ? (
          <img src="https://c.top4top.io/p_2280zwl151.jpg" width={"250px"} alt="right" />
        ) : type === "left" ? (
          <img src="https://c.top4top.io/p_2280zwl151.jpg" width={"250px"}  alt="left" />
        ) : type === "front" ? (
          <img src="https://c.top4top.io/p_2280zwl151.jpg" width={"250px"}  alt="front" />
        ) : type === "top" ? (
          <img src="https://c.top4top.io/p_2280zwl151.jpg" width={"250px"}  alt="top" />
        ) : type === "left-between" ? (
          <img src="https://c.top4top.io/p_2280zwl151.jpg" width={"250px"}  alt="left-between" />
        ) : type === "left-between" ? (
          <img src="https://c.top4top.io/p_2280zwl151.jpg" width={"250px"}  alt="left-between" />
        ) : (
          ""
        )
      ) : typeOfCar === "SUV" ? (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Vp7Pwkg1fNqhope5G0NBnN1BHX6DXAsHxQ&usqp=CAU"
          alt=""
        />
      ) : typeOfCar === "SEDAN" ? (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Vp7Pwkg1fNqhope5G0NBnN1BHX6DXAsHxQ&usqp=CAU"
          alt=""
        />
      ) : (
        ""
      )} */}
    </div>
  );
}

export default Body_Steps_Section;

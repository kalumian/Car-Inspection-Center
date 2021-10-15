import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "../Body/Select";
import Body_Steps_Section from "./Body_Steps_Section";

function Body() {
  //  Hooks
  const [input, setInput] = useState([]);
  const handleInputs = (data) => {
    setInput({
      ...input,
      ...data,
    });
  };
  return (
    <div className="body-step">
      <div className="content">
        <header>
          <Body_Steps_Section
            name="car-type"
            select="تحديد نوع السيارة"
            handleInputs={handleInputs}
            options={["HATCHBACK", "SEDAN", "SUV", "Crossover"]}
            id="car-type"
            header={true}
          />
        </header>
        <Body_Steps_Section
          name="the-front"
          handleInputs={handleInputs}
          id="the-front"
          select="الجهة الأمامية"
          type="front"
        />
        <Body_Steps_Section
          name="the-back"
          id="the-back"
          select="الجهة الخلفية"
          type="back"
          handleInputs={handleInputs}
        />
        <Body_Steps_Section
          name="the-left"
          handleInputs={handleInputs}
          id="the-left"
          select="الجهة الجانبية اليسرى"
          type="left"
        />
        <Body_Steps_Section
          name="the-right"
          id="the-right"
          handleInputs={handleInputs}
          select="الجهة الجانبية اليمنى"
          type="right"
        />
        <Body_Steps_Section
          name="the-left-base"
          id="the-left-base"
          handleInputs={handleInputs}
          select="القواعد اليسرى"
          type="left-base"
        />
        <Body_Steps_Section
          name="the-right-base"
          id="the-right-base"
          handleInputs={handleInputs}
          select="القواعد اليمنى"
          type="right-base"
        />
      </div>
      <button className="Save">حفظ</button>
    </div>
  );
}

export default Body;

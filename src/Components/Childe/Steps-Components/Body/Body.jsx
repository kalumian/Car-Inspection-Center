import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "../Body/Select";
import Body_Steps_Section from "./Body_Steps_Section";

function Body({ snap, setSnap, control, setTimer , user}) {
  //  Hooks
  const [input, setInput] = useState([]);
  const handleInputs = (data) => {
    setInput({
      ...input,
      ...data,
    });
  };
  return (
    <div className="body-step text-center content">
      <div className="body-content">
        <header>
          <Body_Steps_Section
            name="car-type"
            select="تحديد نوع السيارة"
            handleInputs={handleInputs}
            options={["HATCHBACK", "SEDAN", "SUV", "Crossover"]}
            id="car_type"
            header={true}
          />
        </header>
        <Body_Steps_Section
          name="the_front"
          handleInputs={handleInputs}
          id="the_front"
          select="الجهة الأمامية"
          type={input.car_type}
        />
        <Body_Steps_Section
          name="the_back"
          id="the_back"
          select="الجهة الخلفية"
          handleInputs={handleInputs}
          type={input.car_type}
        />
        <Body_Steps_Section
          name="the_top"
          id="the_top"
          select="الجهة العلوية"
          handleInputs={handleInputs}
          type={input.car_type}
        />
        <Body_Steps_Section
          name="the_left"
          handleInputs={handleInputs}
          id="the_left"
          select="الجهة الجانبية اليسرى"
          type={input.car_type}
        />
        <Body_Steps_Section
          name="the_right"
          id="the_right"
          handleInputs={handleInputs}
          select="الجهة الجانبية اليمنى"
          type={input.car_type}
        />
        <Body_Steps_Section
          name="the_left_base"
          id="the_left_base"
          handleInputs={handleInputs}
          select="القواعد اليسرى"
          type={input.car_type}
        />
        <Body_Steps_Section
          name="the_right_base"
          id="the_right_base"
          handleInputs={handleInputs}
          select="القواعد اليمنى"
          type={input.car_type}
        />
      </div>
      <button
        className="save"
        onClick={(e) => {
          e.preventDefault();
          setSnap(snap + 1);
          setTimer(false)
          control(false);
        }}
      >
        حفظ
      </button>
    </div>
  );
}

export default Body;

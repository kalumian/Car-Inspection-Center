import { useState, useEffect } from "react";
import Body_Steps_Section from "./Body_Steps_Section";

function Body({ snap, setSnap, control, setTimer, user, id }) {
  //  Hooks
  const [input, setInput] = useState([]);
  const [check, setCheck] = useState({});
  const [message, setMessage] = useState("");

  const handleData = () => {
    setCheck({
      id: Number(id),
      body_check: { data: input, by: user.name },
    });
  };

  useEffect(async () => {
    if (check.body_check) {
      try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/add-body-check",
          {
            method: "POST",
            body: JSON.stringify(check),
            headers: {
              "Content-Type": "application/json",
              "x-access-tokens": user.token,
            },
          }
        );
        let resJson = await res.json();
        if (resJson.Message === "This has check before  :)") {
          setMessage("تم اجراء هذا الفحص من قبل");
          console.log(resJson);
          setTimeout(() => {
            setSnap(snap + 1);
            setTimer(false);
            control(false);
          }, 3000);
        } else if (resJson.success) {
          setMessage("تم تسجيل بيانات الفحص بنجاح .");
          console.log(resJson);
          setTimeout(() => {
            setSnap(snap + 1);
            setTimer(false);
            control(false);
          }, 3000);
        }
      } catch (err) {
        console.log(err);
        setMessage("تحقق من جودة الانترنت لديك.");
      }
    }
  }, [check]);

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
      <button className="save" onClick={handleData}>
        حفظ
      </button>
      <div
        className={`message my-3 me-2 ${
          message === "تم اجراء هذا الفحص من قبل" ||
          message === "تحقق من جودة الانترنت لديك." ||
          message === "تأكد من الانتهاء من جميع اجراءات الفحص"
            ? "text-danger"
            : "text-success"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default Body;

import UnderCar_section from "./UnderCar_section";
import checks from "../../../../Json/checks.json";
import { useEffect, useState } from "react";
import { AddComputerCheck } from "../../../../Function/Cards";

function UnderCar({ snap, setSnap, control, setTimer, user, id }) {
  const [data, setData] = useState([]);
  const [bir, setBir] = useState({});
  const [iki, setIki] = useState({});
  const [uc, setUc] = useState({});
  const [dort, setDort] = useState({});
  const [bes, setBes] = useState({});
  const [alti, setAlti] = useState({});
  const [check, setCheck] = useState({});
  const [message, setMessage] = useState("");
  const handleData = () => {
    setCheck({ id: Number(id), down_check: data, by: user.name });
  };
  // Functions
  function handleObjectsWithId(arr) {
    return arr.map((i) => {
      return { title: i, id: Math.random() };
    });
  }
  // useEffect
  useEffect(async () => {
    if (check.down_check) {
      try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/add-down-check",
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
          setTimeout(() => {
            setSnap(snap + 1);
            setTimer(false);
            control(false);
          }, 3000);
        } else if (resJson.success) {
          setMessage("تم تسجيل بيانات الفحص بنجاح .");
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

  // -----------------------------
  // function
  const brake = handleObjectsWithId(checks.brake);
  const suspension_and_steering = handleObjectsWithId(
    checks.suspension_and_steering
  );
  const engine = handleObjectsWithId(checks.engine);
  const differential = handleObjectsWithId(checks.differential);
  const conditioner = handleObjectsWithId(checks.conditioner);
  const accessories = handleObjectsWithId(checks.accessories);

  return (
    <div className="content underCar text-center">
      <UnderCar_section
        handleData={setBir}
        title="نظام الفرامل"
        options={brake}
      />
      <UnderCar_section
        handleData={setIki}
        title="نظام التعليق والتوجيه"
        options={suspension_and_steering}
      />
      <UnderCar_section
        handleData={setUc}
        title="نظام المحرّك"
        options={engine}
      />
      <UnderCar_section
        handleData={setDort}
        title="نظام القير والدفرنس"
        options={differential}
      />
      <UnderCar_section
        handleData={setBes}
        title="نظام التكييف"
        options={conditioner}
      />
      <UnderCar_section
        handleData={setAlti}
        title="الاكسسوارات"
        options={accessories}
      />
      <button
        className="save"
        onClick={(e) => {
          e.preventDefault();
          setData([bir, iki, uc, dort, bes, alti]);
          handleData();
        }}
      >
        انهاء فحص اسفل السيارة
      </button>
      <div
        className={`message my-3 me-2 ${
          message === "تم اجراء هذا الفحص من قبل" ||
          message === "تحقق من جودة الانترنت لديك."
            ? "text-danger"
            : "text-success"
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default UnderCar;

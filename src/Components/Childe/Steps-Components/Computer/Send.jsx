import Lable from "../../Form_invoices-components/Lable";
import { useState, useEffect } from "react/cjs/react.development";
import Bar from "./Bar";
function Send({
  statePage,
  setStatePage,
  snap,
  setSnap,
  control,
  setTimer,
  user,
  id,
  code,
}) {
  const [check, setCheck] = useState({});
  const [message, setMessage] = useState("");
  const [count, setCount] = useState([0]);
  const [codes, setCodes] = useState([]);
  useEffect(async () => {
    if (Boolean(check.id)) {
      try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/add-computer-check",
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

  // Functıions
  const handleData = () => {
    if (codes[0]) {
      setCheck({
        id: Number(id),
        computer_check: {
          codes,
          by: user.name,
        },
      });
    }
  };
  const handleCodes = (code) => {
    setCodes([...codes, code]);
  };
  return (
    <dic className="content-computer w-100 ">
      {count.map((i) => {
        return (
          <>
            <Bar code={code} handleCodes={handleCodes} id={i} />
          </>
        );
      })}
      <div className="buttons mt-5 text-center">
        <button className="save mx-2" onClick={() => setStatePage("كنترول")}>
          عودة
        </button>
        <button
          className="save mx-2"
          onClick={(e) => {
            e.preventDefault();
            handleData(codes);
          }}
        >
          ارسال
        </button>
        <button
          className="save mx-2"
          onClick={(e) => {
            e.preventDefault();
            setCodes([]);
            setCount([]);
          }}
        >
          اعادة تعيين
        </button>
        <button
          className="save mx-2"
          onClick={(e) => {
            e.preventDefault();
            setCount([...count, count[count.length - 1]]);
          }}
        >
          اضافة مساحة
        </button>
      </div>
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
    </dic>
  );
}

export default Send;

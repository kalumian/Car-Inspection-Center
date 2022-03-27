import Lable from "../../Form_invoices-components/Lable";
import { useState, useEffect } from "react/cjs/react.development";

function Add({ statePage, setStatePage, user }) {
  const [codeSuc, setCodeSuc] = useState({});
  const [message, setMessage] = useState("");
  const [codeFirst, setCodeFirst] = useState("");
  const [disA, setDisA] = useState("");
  const [disB, setDisB] = useState("");
  const [stateButton, setStateButton] = useState(true);

  const handleCode = (e) => {
    e.preventDefault();
    if (stateButton) {
      if (disA === "" || disB === "" || codeFirst === "") {
        setMessage("تأكد من ادخال جميع البيانات");
        setTimeout(() => {
          setMessage("");
        }, 4000);
      } else {
        setCodeSuc({
          ar_des: disA,
          en_des: disB,
          en_code: codeFirst,
        });
        setStateButton(false);
        setTimeout(() => {
          setStateButton(true);
        }, 4000);
      }
    }
  };
  useEffect(async () => {
    console.log("Work");
    if (codeSuc.en_code) {
      try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/code",
          {
            method: "POST",
            body: JSON.stringify(codeSuc),
            headers: {
              "Content-Type": "application/json",
              "x-access-tokens": user.token,
            },
          }
        );
        let resJson = await res.json();
        if (resJson.success) {
          setMessage("تم اضافة الكود الخدمة بنجاح");
          setDisA("");
          setDisB("");
          setCodeFirst("");
          setTimeout(() => {
            setMessage("");
          }, 4000);
        }
      } catch (err) {
        setMessage("تأكد من المدخلات ومن شبكة الانترنت لديك");
        setTimeout(() => {
          setMessage("");
        }, 4000);
      }
    }
  }, [codeSuc.en_code]);

  return (
    <dic className="content-computer w-100 ">
      <div className="check mt-4 justify-content-around d-flex">
        <div className="code text-center">
          <Lable
            For="invoices_customer_name"
            title="اضافة كود المشكلة"
            active={false}
          />
          <input
            type="text"
            className="form-control text-center"
            value={codeFirst}
            onChange={({ target }) => setCodeFirst(target.value)}
          />
        </div>
        <textarea
          className="form-control mt-3 w-50 me-4"
          placeholder="اضافة وصف لكود المشكلة باللغة العربية"
          id="computer-desc"
          value={disA}
          name="desc"
          onChange={({ target }) => setDisA(target.value)}
        ></textarea>
        <textarea
          className="form-control mt-3 w-50 me-4"
          placeholder="اضافة وصف لكود المشكلة باللغة الانجليزية"
          id="computer-desc"
          value={disB}
          name="desc"
          onChange={({ target }) => setDisB(target.value)}
        ></textarea>
      </div>
      <div className="buttons mt-5 text-center">
        <button className="save mx-2" onClick={() => setStatePage("كنترول")}>
          عودة
        </button>
        <button className="save mx-2" onClick={handleCode}>
          اضافة
        </button>
      </div>
      <div
        className={`message my-3 me-3 ${
          message === "تم اضافة الكود الخدمة بنجاح" ? "text-success" : "text-danger"
        }`}
      >
        {message}
      </div>
    </dic>
  );
}

export default Add;

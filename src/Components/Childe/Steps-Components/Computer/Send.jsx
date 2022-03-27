import Lable from "../../Form_invoices-components/Lable";
import { useState, useEffect } from "react/cjs/react.development";

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
  const [search, setSearch] = useState("");

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
  let CODE = code.filter((e) => {
    return search == e.en_code;
  })[0];

  const handleData = () => {
    setCheck({
      id: Number(id),
      computer_check: {
        data: {
          disA: CODE.ar_des,
          disB: CODE.en_des,
          Code: CODE.en_code,
        },
        by: user.name,
      },
    });
  };
  return (
    <dic className="content-computer w-100 ">
      <div className="check mt-4 justify-content-around d-flex">
        <div className="code text-center">
          <Lable
            For="invoices_customer_name"
            title="كود المشكلة"
            active={false}
          />
          <input
            type="text"
            className="form-control text-center"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
        </div>
        <textarea
          className="form-control mt-3 w-75 me-4"
          placeholder="وصف كود المشكلة(نص غير قابل للتعديل)"
          id="computer-desc"
          name="desc"
          disabled="true"
          value={
            CODE ? `${CODE.en_des} | ${CODE.ar_des}` : "وصف كود المشكلة(نص غير قابل للتعديل)"
          }
        ></textarea>
      </div>
      <div className="buttons mt-5 text-center">
        <button className="save mx-2" onClick={() => setStatePage("كنترول")}>
          عودة
        </button>
        <button
          className="save mx-2"
          onClick={(e) => {
            e.preventDefault();
            handleData();
          }}
        >
          ارسال
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

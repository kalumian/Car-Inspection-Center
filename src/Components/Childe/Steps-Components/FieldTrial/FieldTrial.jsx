import { useState, useEffect } from "react/cjs/react.development";

function FieldTrial({ snap, setSnap, control, setTimer, user, id }) {
  const [note, setNote] = useState("");
  const [check, setCheck] = useState({});
  const [message, setMessage] = useState("");

  const handleData = () => {
    setCheck({
      id: Number(id),
      test_drive_check: { data: note, by: user.name },
    });
  };

  useEffect(async () => {
    if (check.test_drive_check) {
      try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/add-test-drive",
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

  return (
    <div className="mt-6 text-center">
      <textarea
        className="form-control mt-4"
        placeholder={`ملاحظات الفحص الميداني`}
        id={`note-${"ملاحظات الفحص الميداني"}`}
        name="desc"
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
      ></textarea>
      <button
        className="save mt-4"
        onClick={(e) => {
          e.preventDefault();
          handleData();
        }}
      >
        حفظ
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

export default FieldTrial;

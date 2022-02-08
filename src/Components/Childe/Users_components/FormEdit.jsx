// Import Components
import Lable from "../Form_invoices-components/Lable";

// Import From Lib
import { useState, useEffect } from "react";

function FormEdit({ setEditState, id, token, users, setId }) {
  const init = users.filter((item) => item.identity === id);

  // States
  const [identity, setIdentity] = useState(init[0].identity);
  const [password, setPassword] = useState(init[0].password);
  const [name, setName] = useState(init[0].name);
  const [type, setType] = useState(init[0].type);
  const [message, setMessage] = useState("");
  const [account, setAccount] = useState({});

  // Functions

  const clearInputs = () => {
    setName("");
    setPassword("");
    setType("");
    setIdentity("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAccount({
      password,
      name,
      type,
      identity,
    });
    console.log(account);
  };

  useEffect(async () => {
    if (Boolean(account.name) === true) {
      try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/edit-user",
          {
            method: "PATCH",
            body: JSON.stringify(account),
            headers: {
              "Content-Type": "application/json",
              "x-access-tokens": token,
            },
          }
        );
        let resJson = await res.json();
        if (res.status === 200) {
          console.log(res);
          setMessage("تم تعديل الحساب بنجاح.");
          clearInputs("");
          setTimeout(() => {
            setMessage("");
            setEditState(false);
          }, 4000);
        }
      } catch (err) {
        setMessage(String(err));
        console.log(err.Message);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    }
  }, [account]);
  return (
    <>
      <div className="col-4">
        <Lable active={false} title="الاسم" For={"invoices_customer_id_edit"} />
        <input
          type="text"
          id="invoices_customer_name_edit"
          className="form-control"
          placeholder=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="col-4">
        <Lable
          active={false}
          title="كلمة المرور"
          For="invoices_customer_password_edit"
        />
        <input
          type="text"
          id="invoices_customer_password_edit"
          className="form-control"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option selected value={undefined}>
              الوظيفة
            </option>
            <option value={"SuperVisor"}>مشرف </option>
            <option value={"Reception"}>استقبال</option>
            <option value={"Fitter"}>فني </option>
          </select>
        </div>
        <div className="col-4">
          <button className="min mx-1" onClick={handleSubmit}>
            حفظ
          </button>
          <button
            className="min mx-1"
            onClick={() => {
              clearInputs();
              setId();
              setEditState(false);
            }}
          >
            الغاء
          </button>
        </div>
        <div
          className={`message mt-5 ${
            message === "تم تعديل الحساب بنجاح."
              ? "text-success"
              : "text-danger"
          }`}
        >
          {message}
        </div>
      </div>
    </>
  );
}

export default FormEdit;

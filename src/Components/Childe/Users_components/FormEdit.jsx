// Import Components
import Lable from "../Form_invoices-components/Lable";

// Import From Lib
import { useState, useEffect } from "react";

function FormEdit({ setEditState, editState, id, token, users }) {
  console.log(id);
  const init = users.filter((item) => item.identity === id)

  // States
  const [identity, setIdentity] = useState(init[0].identity);
  const [password, setPassword] = useState(init[0].password);
  const [name, setName] = useState(init[0].name);
  const [type, setType] = useState(init[0].type);
  const [message, setMessage] = useState("ddddd");
  const [account, setAccount] = useState({});

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    setAccount({
      password,
      name,
      type,
      identity,
    });
    setTimeout(() => {
      setEditState(!editState);
    }, 100000);
  };

  useEffect(async () => {
    if (Boolean(account.name) === true) {
      console.log(token);
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
        setMessage(res.status === 200 ? "تم اضافة الحساب بنجاح." : "");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } catch (err) {
        setMessage(String(err));
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
          For="invoices_customer_id_edit"
          title="رقم الهوية"
        />
        <input
          type="text"
          id="invoices_customer_id_edit"
          className="form-control"
          placeholder=""
          value={identity}
          onChange={(e) => setIdentity(e.target.value)}
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
            <option value={"fitter"}>فني </option>
          </select>
        </div>
        <div className="col-4">
          <button className="min mx-1" onClick={handleSubmit}>
            حفظ
          </button>
          <div
            className={`message mt-5 ${
              message === "تم اضافة الحساب بنجاح."
                ? "text-success"
                : "text-danger"
            }`}
          >
            {message}
          </div>
        </div>
      </div>
    </>
  );
}

export default FormEdit;

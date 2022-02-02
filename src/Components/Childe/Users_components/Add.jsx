// Import Components
import Input_Default from "../Users_components/Input_Default";
import Lable from "../Form_invoices-components/Lable";

// Import From Lib
import { useEffect, useState } from "react";
import axios from "axios";

function Add() {
  // States & Fucnctions
  const [username, setUsername] = useState("");
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState({});
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [styleButton, setStyleButton] = useState(false);
  const deletContent = () => {
    setUsername("");
    setPassword("");
    setIdentity("");
    setType("");
  };
  const handleSubmit = (e) => {
    setStyleButton(true);
    e.preventDefault();
    setAccount({
      password:"12345",
      name: "11223344",
      type:"Reception",
      identity:"Alwalead",
    });
    setTimeout(() => {
      setStyleButton(false);
    }, 4000);
  };

  useEffect(async () => {
    if (Boolean(account.name) === true) {
      try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/register",
          {
            method: "POST",
            body: JSON.stringify(account),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let resJson = await res.json();
        deletContent();
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
      <form action="" method="post">
        <div className="row">
          <div className="col-4">
            <Lable
              active={false}
              For="invoices_customer_name"
              title="اسم الموظف "
            />
            <input
              name="name_customer"
              id="invoices_customer_name"
              type="text"
              className="form-control"
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
            />
          </div>
          <div className="col-4">
            <Lable
              active={false}
              For="invoices_customer_name"
              title="كلمة المرور"
            />
            <input
              name="password_customer"
              id="invoices_customer_password"
              type="password"
              className={`form-control`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-4">
            <Lable
              active={false}
              For="invoices_customer_name"
              title="رقم الهوية"
            />
            <input
              name="password_customer"
              id="invoices_customer_password"
              type="password"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="row mt-3">
            <div className="col-4">
              <select
                className="form-select"
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option selected value={"undefined"}>
                  الوظيفة
                </option>
                <option value={"SuperVisor"}>مشرف </option>
                <option value={"Reception"}>استقبال</option>
                <option value={"fitter"}>فني </option>
              </select>
            </div>
            <div className="col-4">
              <button
                onClick={
                  !styleButton
                    ? handleSubmit
                    : (e) => {
                        e.preventDefault();
                      }
                }
                className={`min ${styleButton ? "rest" : ""}`}
                type="submit"
              >
                اضافه
              </button>
            </div>
          </div>
        </div>
        <div
          className={`message mt-5 ${
            message === "تم اضافة الحساب بنجاح."
              ? "text-success"
              : "text-danger"
          }`}
        >
          {message}
        </div>
      </form>
    </>
  );
}

export default Add;

// Import From Lib
import { useState, useEffect, useContext } from "react";

// Import Components
import Option from "./Option";

// Import Context
import { DataContext } from "../../../DataContext";

function Delete({ users, setActive, active }) {
  const { user } = useContext(DataContext);

  // State
  const [message, setMessage] = useState("");
  const [id, setId] = useState(undefined);
  const [account, setAccount] = useState({});
  // Function
  const handleId = (e) => {
    setId(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    setAccount({ identity: id });
  };
  useEffect(async () => {
    if (Boolean(account.identity)) {
      try {
        console.log(account);
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/user",
          {
            method: "DELETE",
            body: JSON.stringify(account),
            headers: {
              "Content-Type": "application/json",
              "x-access-tokens": user.token,
            },
          }
        );
        let resJson = await res.json();
        if (resJson.success === true) {
          setMessage(` تم حذف حساب ${resJson.deleted}`);
          setActive(active + 1);
        }
      } catch (err) {
        console.log(err);
        setTimeout(() => {
          setMessage("تأكد من شبكة الانترنت");
        }, 3000);
      }
    }
  }, [account]);

  return (
    <>
      <div className="row">
        <div className="col-4">
          <select className="form-select" id="" onChange={handleId}>
            <option selected value={undefined}>
              اختيار الحساب المراد حذفه
            </option>
            {user.name === "ADMIN"
              ? users.map((item) => {
                  return <Option item={item} handleId={handleId} />;
                })
              : users
                  .filter((i) => {
                    return i.type !== "SuperVisor";
                  })
                  .map((item) => {
                    return <Option item={item} handleId={handleId} />;
                  })}
          </select>
        </div>
        <div className="col-4">
          <button className="min" onClick={submit}>
            حذف
          </button>
        </div>
        <div
          className={`message mt-5 ${
            !(message === "تأكد من شبكة الانترنت")
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

export default Delete;

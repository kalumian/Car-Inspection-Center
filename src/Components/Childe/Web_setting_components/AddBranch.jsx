// Import Components
import Lable from "../Form_invoices-components/Lable";

// Import Lib
import { useState, useEffect } from "react";
import Loader from "../../Parents/Loader/Loader";

function AddBranch({ user, setActive, active }) {
  // State
  const [stateFetch, setStateFetch] = useState(true);
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [message, setMessage] = useState("");
  const [activeButton, setActiveButton] = useState(true);

  const handleAccount = (e) => {
    e.preventDefault();
    if (activeButton) {
      if (!(name === "")) {
        setAccount({ name });
      } else {
        setMessage("تأكد من البيانات المدخلة");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    }
  };
  // UseEffect
  useEffect(async () => {
    if (account.name) {
      try {
        setStateFetch(false);
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/add-branch",
          {
            method: "POST",
            body: JSON.stringify(account),
            headers: {
              "Content-Type": "application/json",
              "x-access-tokens": user.token,
            },
          }
        );
        let resJson = await res.json();
        console.log(resJson);
        if (resJson.success === true) {
          setStateFetch(true);
          setActiveButton(false);
          setName("");
          setMessage("تم اضافة الفرع بنجاح.");
          setTimeout(() => {
            setMessage("");
            setActiveButton(true);
          }, 4000);
          setActive(active + 1);
        }
      } catch (err) {
        console.log(err);
        setMessage("تأكد من المدخلات ومن شبكة الانترنت لديك");
      }
    }
  }, [account]);
  return (
    <>
      <form className="AddBranch" onSubmit={handleAccount}>
        <div className="row">
          <div className="col-8">
            <Lable
              active={false}
              For="invoices_customer_name"
              title="اضافة فرع"
            />
            <input
              name="name_branch"
              id="name_branch"
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit" className="min col-2">
            حفظ
          </button>
        </div>
        <div
          className={`message my-2 ${
            message === "تم اضافة الفرع بنجاح." ? "text-success" : "text-danger"
          }`}
        >
          {message}
        </div>
      </form>
    </>
  );
}

export default AddBranch;

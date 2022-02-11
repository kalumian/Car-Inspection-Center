// Import Lib
import { useState, useEffect } from "react";

function DeleteBranch({ user, active, setActive, id }) {
  const [message, setMessage] = useState();
  const [account, setAccount] = useState({});
  const HandleDelete = (e) => {
    setAccount({ id });
    e.preventDefault();
  };

  useEffect(async () => {
    if (Boolean(id) === true) {
      try {
        console.log(account);
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/bransh",
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
          setMessage("تم حذف الحساب بنجاح");
          setActive(active + 1);
          setTimeout(() => {
            setMessage("");
          }, 3000);
        }
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
      <button type="submit" className="min col-4" onClick={HandleDelete}>
        حذف
      </button>
      <div
        className={`message my-2 ${
          message === "تم حذف الحساب بنجاح" ? "text-success" : "text-danger"
        }`}
      >
        {message}
      </div>
    </>
  );
}

export default DeleteBranch;

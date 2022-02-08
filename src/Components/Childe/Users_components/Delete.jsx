// Import From Lib
import { useState, useEffect, useContext } from "react";

// Import Components
import Option from "./Option";

// Import Context
import { DataContext } from "../../../DataContext";

function Delete({ users }) {
  const { user } = useContext(DataContext);

  // State
  const [message, setMessage] = useState(false);
  const [id, setId] = useState(undefined);
  const [account, setAccount] = useState({});
  // Function
  const handleId = (e) => {
    setId(e.target.value);
    console.log(id);
  };
  const submit = (e) => {
    e.preventDefault();
    setAccount({ identity: id });
  };
  useEffect(async () => {
    if (Boolean(account.identity)) {
      console.log(account);
      try {
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/user",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "x-access-tokens": user.token,
            },
            body: { identity: id },
          }
        );
        let resJson = await res.json();
        setMessage("تم حذف الحساب");
        setId(undefined);
        console.log(resJson);
      } catch (err) {
        console.log(err);
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
            {users.map((item) => {
              return <Option item={item} />;
            })}
          </select>
        </div>
        <div className="col-4">
          <button className="min" onClick={submit}>
            حذف
          </button>
        </div>
      </div>
    </>
  );
}

export default Delete;

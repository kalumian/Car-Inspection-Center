// Import From Lib
import { useState, useEffect, useContext } from "react";

// Import Components
import Option from "./Option";

// Import Context
import { DataContext } from "../../../DataContext";
import Loader from "../../Parents/Loader/Loader";

function Delete() {
  const { user } = useContext(DataContext);

  // State
  const [editState, setEditState] = useState(false);
  const [users, setUsers] = useState([]);
  const [stateFetch, setStateFetch] = useState(false);
  const [id, setId] = useState(undefined);
  // Function
  useEffect(async () => {
    try {
      let res = await fetch(
        "https://peaceful-depths-13311.herokuapp.com/users",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-tokens": user.token,
          },
        }
      );
      let resJson = await res.json();
      setUsers(resJson["ALL USERS"]);
      setStateFetch(true);
    } catch (err) {
      console.log(String(err));
    }
  }, []);

  const handleId = (ID) => {
    setId(ID);
  };
  return (
    <>
      <div className="row">
        <div className="col-4">
          <select className="form-select" id="">
            <option selected value={undefined}>
              اختيار الحساب المراد حذفه
            </option>
            {users.map((item) => {
              return <Option item={item} handleId={handleId} />;
            })}
          </select>
        </div>
        <div className="col-4">
          <button className="min">حذف</button>
        </div>
        {!stateFetch ? <Loader /> : <></>}
      </div>
    </>
  );
}

export default Delete;

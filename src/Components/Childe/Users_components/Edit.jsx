// Import Components
import Input_Default from "../Users_components/Input_Default";
import Lable from "../Form_invoices-components/Lable";
import Option from "./Option";
import FormEdit from "./FormEdit";
// Import From Lib
import { useState, useEffect, useContext } from "react/cjs/react.development";

// Import DataContext
import { DataContext } from "../../../DataContext";
function Edit() {
  const { user } = useContext(DataContext);

  // State
  const [editState, setEditState] = useState(false);
  const [users, setUsers] = useState([]);
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
    } catch (err) {
      console.log(String(err));
    }
  }, []);

  const handleId = (ID) => {
    console.log(id);
    setId(ID);
  };
  return (
    <>
      <div className="row">
        {editState ? (
          <FormEdit
            users={users}
            id={id}
            setEditState={setEditState}
            editState={editState}
            token={user.token}
          />
        ) : (
          <>
            <div className="col-4">
              <select
                className="form-select"
                onChange={(e) => {
                  handleId(e.target.value);
                }}
              >
                <option selected value={undefined}>
                  الموظف
                </option>
                {users.map((item) => {
                  return <Option item={item} handleId={handleId} />;
                })}
              </select>
            </div>
            <div className="col-2">
              <button
                className="min mx-1"
                onClick={() => {
                  id === undefined || id === "الموظف"
                    ? setEditState(false)
                    : setEditState(true);
                }}
              >
                تعديل
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Edit;

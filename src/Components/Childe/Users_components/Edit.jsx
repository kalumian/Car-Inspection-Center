// Import Components
import Input_Default from "../Users_components/Input_Default";
import Lable from "../Form_invoices-components/Lable";
import Option from "./Option";
import FormEdit from "./FormEdit";
import Loader from "../../Parents/Loader/Loader";

// Import From Lib
import { useState, useEffect, useContext } from "react/cjs/react.development";

// Import DataContext
import { DataContext } from "../../../DataContext";
function Edit({ users }) {
  const { user } = useContext(DataContext);

  // State
  const [editState, setEditState] = useState(false);
  const [id, setId] = useState(undefined);

  // Function

  const handleId = (ID) => {
    setId(ID);
  };
  return (
    <>
      <div className="row">
        {editState ? (
          <FormEdit
            setId={setId}
            users={users}
            id={id}
            setEditState={setEditState}
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

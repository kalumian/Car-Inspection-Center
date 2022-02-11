// Import Components
import Lable from "../Form_invoices-components/Lable";
import DeleteBranch from "./DeleteBranch";

// Import Lib
import { useState, useEffect } from "react";

function EditBranch({ branches, user , setActive , active }) {
  const [editState, setEditState] = useState(true);
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [message, setMessage] = useState();
  const [account, setAccount] = useState({});

  useEffect(async () => {
    if (Boolean(account.name) === true) {
      try {
        console.log(account);
        let res = await fetch(
          "https://peaceful-depths-13311.herokuapp.com/edit-user",
          {
            method: "PATCH",
            body: JSON.stringify(account),
            headers: {
              "Content-Type": "application/json",
              "x-access-tokens": user.token,
            },
          }
        );
        let resJson = await res.json();
        console.log(resJson);
        setMessage("تم تعديل الفرع بنجاح.");

        // if (res.status === 200) {
        //   setMessage("تم تعديل الحساب بنجاح.");
        // }
      } catch (err) {
        setMessage(String(err));
        console.log(err.Message);
      }
    }
  }, [account]);
  return (
    <>
      {editState ? (
        <>
          <div className="row">
            <div className="col-8">
              <select
                className="form-select col-8"
                name="edit-delete-branch"
                id="edit-delete-branch"
                onChange={(e) => {
                  setId(e.target.value);
                  console.log(id);
                }}
              >
                <option selected value={undefined}>
                  الفرع
                </option>
                {branches.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button
              type="submit"
              className="min col-2 mx-1"
              onClick={(e) => {
                e.preventDefault();
                if (id) {
                  setName(
                    branches.filter((i) => {
                      return String(i.id) === id;
                    })[0].name
                  );
                  setEditState(false);
                }
              }}
            >
              تعديل
            </button>
          </div>
          <div className="row mt-2">
            <DeleteBranch
              user={user}
              id={id}
              setActive={setActive}
              active={active}
            />
          </div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-8">
              <Lable
                active={false}
                For="invoices_customer_name"
                title="يمكنك التعديل على الفرع الآن"
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
            <button
              type="submit"
              className="min col-2"
              onClick={(e) => {
                e.preventDefault();
                setAccount({ id:Number(id), name });
              }}
            >
              حفظ
            </button>
            <div
              className={`message my-2 ${
                message === "تم تعديل الفرع بنجاح."
                  ? "text-success"
                  : "text-danger"
              }`}
            >
              {message}
            </div>
          </div>
          <button
            type="submit"
            className="min col-2 mt-2"
            onClick={(e) => {
              e.preventDefault();
              setName("");
              setId("");
              setEditState(true);
            }}
          >
            الغاء
          </button>
        </>
      )}
    </>
  );
}

export default EditBranch;

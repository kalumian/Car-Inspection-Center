// Import from Lib
import { useState, useEffect, useContext } from "react";

// Import Components
import Edit_services from "./Edit_services";
import Add_services from "./Add_services";
import Delete_services from "./Delete_services";
import Loader from "../../Parents/Loader/Loader";
import { DataContext } from "../../../DataContext";

function Edit_page({ setEditPage, editPage }) {
  const { user } = useContext(DataContext);
  // State
  const [services, setServices] = useState([]);
  const [stateFetch, setStateFetch] = useState(true);
  const [sections, setSections] = useState("control");
  const [active, setActive] = useState(0);

  useEffect(async () => {
    setStateFetch(false);
    try {
      let res = await fetch(
        "https://peaceful-depths-13311.herokuapp.com/services",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-tokens": user.token,
          },
        }
      );
      let resJson = await res.json();
      setServices(resJson["ALL Services"]);
      setStateFetch(true);
    } catch (err) {
      console.log(err);
    }
  }, [active]);
  return (
    <div className={`edit-page rtl shadow-lg ${editPage ? "active" : ""}`}>
      <header>
        <span className="close" onClick={() => setEditPage(false)}>
          X
        </span>
      </header>
      <form>
        {sections === "control" ? (
          <div className="control d-flex justify-content-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                setSections("add");
              }}
              className="min mx-2"
            >
              اضافة
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setSections("delete");
              }}
              className="min mx-2"
            >
              حذف
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setSections("edit");
              }}
              className="min mx-2"
            >
              تعديل
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setEditPage(false);
              }}
              className="min mx-2"
            >
              انهاء
            </button>
          </div>
        ) : sections === "edit" ? (
          <Edit_services
            setEditPage={setEditPage}
            editPage={editPage}
            services={services}
            setSections={setSections}
            user={user}
            setActive={setActive}
            active={active}
          />
        ) : sections === "delete" ? (
          <Delete_services
            services={services}
            setEditPage={setEditPage}
            editPage={editPage}
            setSections={setSections}
            user={user}
            setActive={setActive}
            active={active}
          />
        ) : sections === "add" ? (
          <Add_services
            setEditPage={setEditPage}
            editPage={editPage}
            setSections={setSections}
            user={user}
            setActive={setActive}
            active={active}

          />
        ) : (
          <></>
        )}
      </form>
      {!stateFetch ? <Loader /> : <></>}
    </div>
  );
}

export default Edit_page;

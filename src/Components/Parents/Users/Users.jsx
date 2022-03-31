import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";
import Header from "../../Childe/General-components/Header/Header";
import Section from "../../Childe/Users_components/Section";
import Add from "../../Childe/Users_components/Add";
import Delete from "../../Childe/Users_components/Delete";
import Edit from "../../Childe/Users_components/Edit";
import Loader from "../Loader/Loader";

// Import Lib
import { useState, useEffect } from "react";
import { GetUser } from "../../../Function/Generel";

function Users() {
  const user = GetUser()
  const [users, setUsers] = useState([]);
  const [stateFetch, setStateFetch] = useState(true);
  const [active, setActive] = useState(1);
  useEffect(async () => {
    try {
      setStateFetch(false);
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
    } catch (err) {}
  }, [active]);
  return (
    <div className="d-flex wrapper flex-row-reverse">
      <Sidebar user={user} />
      <div className="container-fluid px-4 ">
        <Header user={user} />
        {user.type === "المشرف" ? (
          <>
            <div className="users rtl">
              <Section Component={Add} title="اضافة حساب جديد" />
              <button
                className="mt-3 min re"
                onClick={() => setActive(active + 1)}
              >
                <i className="fas fa-sync-alt"></i>
              </button>
              <Section users={users} Component={Edit} title="تعديل حساب" />
              <Section
                setActive={setActive}
                active={active}
                users={users}
                Component={Delete}
                title="حذف حساب"
              />
              {!stateFetch ? <Loader /> : <></>}
            </div>
          </>
        ) : (
          <Error_Page kind={400} />
        )}
      </div>
    </div>
  );
}

export default Users;

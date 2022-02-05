// Import Components
import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";
import Header from "../../Childe/General-components/Header/Header";
import Table_Admin from "../../Childe/Staff-Components/Table_Admin";
import Table_Reception from "../../Childe/Staff-Components/Table_Reception";
import Table_Technician from "../../Childe/Staff-Components/Table_Technician";
import Table from "../../Childe/Staff-Components/Table";
import Loader from "../Loader/Loader";
// Import From Lib
import { useState, useEffect, useContext } from "react";

function Staff({ user }) {
  // State
  const [users, setUsers] = useState([]);
  const [usersState, setUsersState] = useState(false);
  // Effect
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
      setUsersState(true)
    } catch (err) {
      console.log(String(err));
    }
  }, []);
  const Content = () => {
    return (
      <>
        <div className="d-flex wrapper flex-row-reverse">
          <Sidebar user={user} />
          <div className="invoices">
            <Header user={user} />
            <div className="d-flex justify-content-center flex-column staff">
              <h2 className="text-center mt-3 mb-1">قائمة الموظفين</h2>
              <Table Contents={Table_Admin} title="المشرفين" users={users} />
              <Table
                Contents={Table_Reception}
                title="الاستقبال"
                users={users}
              />
              <Table
                Contents={Table_Technician}
                title="الفنيين"
                users={users}
              />

              {!usersState ? <Loader /> : <></>}
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {user.type === "الاستقبال" || user.type === "المشرف" ? (
        <Content />
      ) : (
        <Error_Page kind={400} />
      )}
    </>
  );
  // Content
}

export default Staff;

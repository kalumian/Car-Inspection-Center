// Import Components
import Header from "../../Childe/General-components/Header/Header";
import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Table from "../../Childe/Invoices-components/Table";
import Form from "../../Childe/Invoices-components/Form";
import Error_Page from "../Error_Page/Error_Page";

import react, { useState, useEffect } from "react";
// Import Functions
import { WhatThisAccount } from "../../../Function/UsersControl";
import Loader from "../Loader/Loader";

const init = {
  serachWithName: "",
  serachWithNumbers: "",
  serachWithStartDate: "",
  serachWithEndDate: "",
  serachWithNumOfLicense: "",
  serachWithBranch: "",
  serachWithState: "",
};
function Invoices({ user }) {
  const [invoices, setInvoices] = useState([]);
  const [stateFetch, setStateFetch] = useState(true);
  const [branches, setBranches] = useState([]);
  const [input, setInput] = useState(init);

  useEffect(async () => {
    setStateFetch(true);
    try {
      let res = await fetch(
        "https://peaceful-depths-13311.herokuapp.com/bills",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-tokens": user.token,
          },
        }
      );
      let resJson = await res.json();
      console.log(resJson);
      setInvoices(resJson["ALL Bills"]);
      setStateFetch(false);
    } catch (err) {
      setStateFetch(false);
      console.log(err);
    }
    try {
      let res = await fetch(
        "https://peaceful-depths-13311.herokuapp.com/branches",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-tokens": user.token,
          },
        }
      );
      let resJson = await res.json();
      setBranches(resJson["ALL Branches"]);
    } catch (err) {}
  }, []);

  const handleChange = ({ target }) => {
    setInput({ ...input, [target.name]: target.value });
  };
  return (
    <>
      {user.type === "الاستقبال" || user.type === "المشرف" ? (
        <>
          <div className="d-flex wrapper flex-row-reverse">
            <Sidebar user={user} />
            <div className="invoices">
              <Header user={user} />
              <h2 className="text-center mt-4 ">قائمة الفواتير</h2>
              {stateFetch ? (
                <Loader />
              ) : (
                <>
                  <Form
                    user={user}
                    handleChange={handleChange}
                    input={input}
                    branches={branches}
                  />
                  <Table invoices={invoices} input={input} />
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <Error_Page kind={400} />
      )}
    </>
  );
}

export default Invoices;

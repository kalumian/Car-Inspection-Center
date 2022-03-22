// Import Components
import Lable from "../Form_invoices-components/Lable";
import GetBranch from "./GetBranch";
import AddBranch from "./AddBranch";
import EditBranch from "./EditBranch";
import Option from "../Users_components/Option";

// Import Lib
import { useState, useEffect } from "react";
import Loader from "../../Parents/Loader/Loader";

function Branch({ user }) {
  //  UseState
  const [stateFetch, setStateFetch] = useState(true);
  const [branches, setBranches] = useState([]);
  const [active, setActive] = useState(1);

  useEffect(async () => {
    try {
      setStateFetch(false);
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
      setStateFetch(true);
    } catch (err) {
      setStateFetch(false);
    }
  }, [active]);
  return (
    <>
      <div className="row mt-3 branch d-flex">
        {/* Loader */}
        <button
          className="min re align-self-end my-4"
          onClick={() => setActive(active + 1)}
        >
          <i className="fas fa-sync-alt"></i>
        </button>
        <div className="content">
          {/* Add Components */}
          <div>
            <AddBranch user={user} setActive={setActive} active={active} />
            <EditBranch
              branches={branches}
              user={user}
              setActive={setActive}
              active={active}
            />
          </div>
          {/* Get Components */}
          <GetBranch branches={branches} />
        </div>
        {/* Loader Components */}
        {!stateFetch ? <Loader /> : <></>}
      </div>
    </>
  );
}

export default Branch;

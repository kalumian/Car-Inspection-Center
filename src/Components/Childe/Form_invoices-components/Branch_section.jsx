// import components
import Lable from "./Lable";
import Select from "./Select";

import React, { useState, useEffect } from "react";

function Branch_section({ handleChange , user }) {
    const [branchs , setBranches] = useState([])

    useEffect(async () => {
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
        } catch (err) {
          console.log(err);
        }
      }, []);

  return (
    <div className="col-4">
      <Lable For="invoices_customer_branch" title="تحديد الفرع" />
      <Select
        name="invoices_customer_branch"
        id="invoices_customer_branch"
        handleChange={handleChange}
        select="تحديد الفرع"
        options={branchs}
        type="branchs"
      />
    </div>
  );
}

export default Branch_section;

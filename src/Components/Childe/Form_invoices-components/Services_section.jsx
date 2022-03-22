// import components
import Lable from "./Lable";
import Select from "./Select";

import React, { useState, useEffect } from "react";

function Services_section({ handleChange , user }) {
    const [services , setServices] = useState([])
    useEffect(async () => {
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
          console.log(resJson["ALL Services"]);
        } catch (err) {
          console.log(err);
        }
      }, []);

  return (
    <div className="col-4">
      <Lable For="invoices_customer_service" title="تحديد نوع الخدمة" />
      <Select
        name="invoices_customer_service"
        id="invoices_customer_service"
        handleChange={handleChange}
        select="تحديد نوع الخدمة"
        options={services}
        type="services"
      />
    </div>
  );
}

export default Services_section;

// import components
import Lable from "./Lable";
import Select from "./Select";

import React, { useState, useEffect } from "react";

function Services_section({ handleChange, user, serviceID, setCost, cost }) {
  const [services, setServices] = useState([]);
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
    } catch (err) {
      console.log(err);
    }
    setCost(
      serviceID > 0
        ? services.filter((i) => {
            return i.id === Number(serviceID);
          })[0].Price
        : ""
    );
  }, [serviceID]);

  return (
    <>
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
      <div className="col-4 text-center">
        <Lable For="invoices_customer_cost" title="التكلفة" />
        <input
          type="text"
          name="invoices_customer_cost"
          value={cost}
          className="form-control"
          id="invoices_customer_cost"
          placeholder=""
          autoComplete="off"
        />
      </div>
    </>
  );
}

export default Services_section;

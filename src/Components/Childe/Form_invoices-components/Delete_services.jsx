import React, { useState, useEffect } from "react";

export default function Delete_services({ setEditPage, setSections }) {
  const [message, setMessage] = useState("");
  return (
    <div className="row mt-3 ">
      <h4>حذف الخدمة</h4>
      <div className="col">
        <select
          className="form-select col-8"
          name="edit-delete-branch"
          id="edit-delete-branch"
          onChange={(e) => {
            // setId(e.target.value);
            // console.log(id);
          }}
        >
          <option selected value={undefined}>
            الخدمات
          </option>
          {[].map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="row mt-3 ">{message}</div>
      <div className="d-flex justify-content-center">
        <button
          className="w-30 btn btn-lg primary-bg mx-2"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          حذف
        </button>
        <button
          className="w-30 btn btn-lg primary-bg mx-2"
          onClick={(e) => {
            e.preventDefault();
            setSections("control");
          }}
        >
          عودة
        </button>
        <button
          className="w-30 btn btn-lg primary-bg mx-2"
          onClick={(e) => {
            e.preventDefault();
            setSections("control");
            setEditPage(false);
          }}
        >
          انهاء
        </button>
      </div>
    </div>
  );
}

import React from "react";
import Lable from "../../Form_invoices-components/Lable";
import { useState, useEffect } from "react/cjs/react.development";

export default function Bar({ code, id, handleCodes }) {
  const [search, setSearch] = useState("");
  const [buttonState, setButtonState] = useState(true);
  let CODE = code.filter((e) => {
    return search == e.en_code;
  })[0];

  return (
    <>
      <div className="check mt-4 justify-content-around d-flex" key={id}>
        <div className="code text-center">
          <Lable
            For="invoices_customer_name"
            title="كود المشكلة"
            active={false}
          />
          <input
            type="text"
            className="form-control text-center"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            disabled={buttonState ? "" : "true"}
          />
        </div>
        <textarea
          className="form-control mt-3 w-50 me-4"
          placeholder="وصف كود المشكلة(نص غير قابل للتعديل)"
          id="computer-desc"
          name="desc"
          disabled="true"
          value={
            CODE
              ? `${CODE.en_des} | ${CODE.ar_des}`
              : "وصف كود المشكلة(نص غير قابل للتعديل)"
          }
        ></textarea>
        <button
          className="min"
          onClick={() => {
            if (buttonState) {
              handleCodes({ id, code: search });
              setButtonState(false);
            }
          }}
        >
          {buttonState ? "+" : "-"}
        </button>
      </div>
    </>
  );
}

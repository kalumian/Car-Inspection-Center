import React from "react";

function GetBranch({ branches }) {
  return (
    <table className="table table-striped table-hover text-center rtl my-4 w-75 ">
      <thead className="fw-bolder">
        <tr>
          <td>الاسم</td>
        </tr>
      </thead>
      <tbody>
        {branches.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default GetBranch;

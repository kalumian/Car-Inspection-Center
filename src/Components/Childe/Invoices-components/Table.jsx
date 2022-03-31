import { DataContext } from "../../../DataContext";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
function Table({ invoices, input }) {
  const { cards, stateSide } = useContext(DataContext);
  const history = useHistory();
  const whatTheState = (state) => {
    return state === "UnderConstruction"
      ? "قيد التنفيذ"
      : state === "Deleted"
      ? "محذوفة"
      : state === "Finished"
      ? "منتهية"
      : "";
  };
  return (
    <div className={`section ${!stateSide ? "active" : ""}`}>
      <table className="table table-striped table-hover text-center rtl ">
        <thead className="fw-bolder">
          <tr>
            <td>الفاتورة</td>
            <td>الاسم</td>
            <td>الجوال</td>
            <td>اللوحة</td>
            <td>الخدمة</td>
            <td>السعر</td>
            <td>الخصم</td>
            <td>إجمالي السعر</td>
            <td>الحالة</td>
            <td>الفرع</td>
            <td>بواسطة</td>
            <td>الانشاء</td>
            <td>الانتهاء</td>
          </tr>
        </thead>
        <tbody>
          {invoices
            .filter((e) => {
              return new RegExp(input.phoneNum, "ig").test(e.phoneNum);
            })
            .filter((e) => {
              return new RegExp(input.serachWithName, "ig").test(e.name);
            })
            .filter((e) => {
              return new RegExp(input.serachWithNumOfLicense, "ig").test(
                e.numOfLicense
              );
            })
            .filter((e) => {
              return new RegExp(input.serachWithStartDate, "ig").test(
                e.StartDate
              );
            })
            .filter((e) => {
              return new RegExp(input.serachWithEndDate, "ig").test(e.id);
            })
            .filter((e) => {
              return new RegExp(input.serachWithState, "ig").test(e.BillState);
            })
            .filter((e) => {
              return new RegExp(input.serachWithCreatedBill, "ig").test(e.by);
            })
            .filter((e) => {
              return new RegExp(input.serachWithBranch, "ig").test(e.branch_id);
            })
            .filter((e) => {
              return new RegExp(input.serachWithService, "ig").test(
                e.nameService
              );
            })
            .reverse()
            .map((item) => {
              return (
                // <Link to={`/dashboard/بيانات-الفاتورة/${item.id}`}>
                <tr
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/dashboard/بيانات-الفاتورة/${item.id}`);
                  }}
                >
                  <td>{item.id}</td>
                  <td>{String(item.name)}</td>
                  <td>{String(item.phoneNum)}</td>
                  <td>
                    {String(item.numOfLicense)
                      .toUpperCase()
                      .split(" ")
                      .join(" - ")}
                  </td>
                  <td>{item.nameService}</td>
                  <td> {Number(item.totalCost)}</td>
                  <td>{Number(item.cost) - Number(item.totalCost)}</td>
                  <td>{Number(item.cost)}</td>
                  <td>{whatTheState(item.BillState)}</td>
                  <td>{item.branch_id}</td>
                  <td>{item.by}</td>
                  <td>{item.StartDate}</td>
                  <td>
                    {!(whatTheState(item.BillState) === "منتهية")
                      ? " -- "
                      : String(item.endDate).split(" ")[0]}
                  </td>
                </tr>
                // </Link>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

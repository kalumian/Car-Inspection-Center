import { DataContext } from "../../../DataContext";
import { useContext } from "react";
function Table() {
  const { cards, stateSide } = useContext(DataContext);
  return (
    <div className={`section ${!stateSide ? "active" : ""}`}>
      <table className="table table-striped table-hover text-center rtl ">
        <thead className="fw-bolder">
          <tr>
            <td>الفاتورة</td>
            <td>فاتورة الفرع</td>
            <td>الاسم</td>
            <td>الجوال</td>
            <td>اللوحة</td>
            <td>المجموع</td>
            <td>الخصم</td>
            <td>إجمالي السعر</td>
            <td>صافي الفاتورة</td>
            <td>الحالة</td>
            <td>الفرع</td>
            <td>بواسطة</td>
            <td>الانشاء</td>
            <td>الانتهاء</td>
          </tr>
        </thead>
        <tbody>
          {cards.map((item) => {
            return (
              <tr>
                <td>4534</td>
                <td>4534</td>
                <td>{String(item.name_customer)}</td>
                <td>{String(item.number_customer)}</td>
                <td>
                  {String(item.customer_board_number).split("").join(" ")},
                  {String(item.customer_board_letters).split("").join(" ")}
                </td>
                <td> {Number(item.customer_cost)}</td>
                <td>
                  {Number(item.customer_cost) -
                    Number(item.customer_final_cost)}
                </td>
                <td>{Number(item.customer_final_cost)}</td>
                <td>230</td>
                <td>قيد التنفيذ</td>
                <td>القطيف</td>
                <td>{item.by}</td>
                <td>{item.Created_date}</td>
                <td>{item.date_f}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
// customer_VIN: "2134"
// customer_board_letters: "2134"
// customer_board_number: "يسبس"
// customer_cost: "200"
// customer_crane: "5"
// customer_factory: "فورد"
// customer_final_cost: "150"
// customer_motion_service: "فحص محركات شامل"
// customer_motion_year: "1988"
// customer_speedometer: "213"
// customer_type: "ربع"
// email_customer: "asdas@gmail.com"
// name_customer: "محمد فيصل"
// notes: ""
// number_customer: "054312314"
// Created_date: "2021/5/2"

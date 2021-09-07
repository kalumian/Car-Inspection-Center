import { DataContext } from "../../../DataContext";
import { useContext } from "react";
function Table() {
  const cards = useContext(DataContext);
  return (
    <div className="section" onClick={() => console.log(cards.cards)}>
      <table class="table table-striped table-hover text-center rtl">
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
          {cards.cards.map((item) => {
            return (
              <tr>
                <td>4534</td>
                <td>4534</td>
                <td>{String(item.invoices_customer_name)}</td>
                <td>{String(item.invoices_customer_number)}</td>
                <td>
                  {String(item.invoices_customer_board_number)},
                  {String(item.invoices_customer_board_name)}
                </td>
                <td>200</td>
                <td>15</td>
                <td>215</td>
                <td>230</td>
                <td>قيد التنفيذ</td>
                <td>القطيف</td>
                <td>2</td>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

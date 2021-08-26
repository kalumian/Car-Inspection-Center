function Table() {
  return (
    <table class="table table-striped table-hover mt-5 ">
      <thead className="fw-bolder ">
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
          <td>تاريخ الانشاء</td>
        </tr>
      </thead>
      <tbody>
        {[1,2,3,4,5,6,7,8].map((item) => {
          return (
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
              <td>تاريخ الانشاء</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;

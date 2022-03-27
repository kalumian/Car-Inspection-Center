// Import Components
import Header from "../General-components/Header/Header";
import Sidebar from "../General-components/Sidebar/Sidebar";
import Error_Page from "../../Parents/Error_Page/Error_Page";
import Loader from "../../Parents/Loader/Loader";
import { DeleteBill } from "../../../Function/Cards";
// import Lib
import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
function BillPage({ user }) {
  const [invoices, setInvoices] = useState([]);
  const [stateFetch, setStateFetch] = useState(false);
  const [active, setActive] = useState(0);
  const location = useLocation();
  const idBill = location.pathname.split("/")[3];
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
  useEffect(async () => {
    setStateFetch(false);
    try {
      let res = await fetch(
        "https://peaceful-depths-13311.herokuapp.com/bills",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-tokens": user.token,
          },
        }
      );
      let resJson = await res.json();
      console.log(idBill);
      setInvoices(
        resJson["ALL Bills"].filter((i) => {
          return i.id == idBill;
        })
      );
      console.log(invoices);
      setStateFetch(true);
    } catch (err) {
      setStateFetch(true);
      console.log(err);
    }
  }, [active]);
  return (
    <>
      {user.type === "الاستقبال" || user.type === "المشرف" ? (
        <>
          {/* BillState: "UnderConstruction"
StartDate: "2/2/2011"
branch_id: 1
by: "alwaleed "
cost: "3777"
email: "ewfwedf@fewef"
endDate: "1221"
id: 22
name: "ali"
nameService: "فحص محرّكات"
note: "fd"
numCrane: "2314"
numOfLicense: "2332 dfv"
numVin: "32423"
numaCounter: "Fgdsgfds"
phoneNum: "32423"
totalCost: "3434"
type: "dsfgsd"
typeService: 9
vactor: "ttt"
year: "2011" */}
          <div className="d-flex wrapper flex-row-reverse">
            <Sidebar user={user} />
            <div className="invoices">
              <Header user={user} />
              <h2 className="text-center mt-4 ">بيانات الفاتورة</h2>
              <div className="container rtl mt-4">
                {!stateFetch ? (
                  <Loader />
                ) : (
                  <>
                    {/* ---------------------------------------------------- */}
                    <h4 className="my-4">
                      <hr />
                      <strong>بيانات العميل</strong>
                    </h4>
                    <h6 className="my-4">
                      <strong>الاسم</strong>: {invoices[0].name}
                    </h6>
                    <h6 className="my-4">
                      <strong>رقم الجوال</strong>: {invoices[0].phoneNum}
                    </h6>
                    <h6 className="my-4">
                      <strong>الإيميل</strong>: {invoices[0].email}
                    </h6>
                    {/* ---------------------------------------------------- */}
                    <h4 className="my-4">
                      <hr />
                      <strong>بيانات المركبة</strong>
                    </h4>
                    <h6 className="my-4">
                      <strong>المصنع</strong>: {invoices[0].vactor}
                    </h6>
                    <h6 className="my-4">
                      <strong>النوع</strong>: {invoices[0].type}
                    </h6>
                    <h6 className="my-4">
                      <strong>اللوحة</strong>: {invoices[0].numOfLicense}
                    </h6>
                    <h6 className="my-4">
                      <strong>سنة الصنع</strong>: {invoices[0].year}
                    </h6>
                    <h6 className="my-4">
                      <strong>العدّاد</strong>: {invoices[0].numaCounter}
                    </h6>
                    <h6 className="my-4">
                      <strong>VIN رقم الـ</strong>: {invoices[0].numVin}
                    </h6>
                    {/* ---------------------------------------------------- */}
                    <h4 className="my-4">
                      <hr />
                      <strong>بيانات الخدمة والتكلفة</strong>
                    </h4>
                    <h6 className="my-4">
                      <strong>نوع الخدمة</strong>: {invoices[0].nameService}
                    </h6>
                    <h6 className="my-4">
                      <strong>رقم الخدمة</strong>: {invoices[0].typeService}
                    </h6>
                    <h6 className="my-4">
                      <strong>التكلفة</strong>: {invoices[0].cost}
                    </h6>
                    <h6 className="my-4">
                      <strong>التكلفة النهائية</strong>: {invoices[0].totalCost}
                    </h6>
                    <h6 className="my-4">
                      <strong>الخصم</strong>:{" "}
                      {Number(invoices[0].cost) - Number(invoices[0].totalCost)}
                    </h6>
                    {/* ---------------------------------------------------- */}
                    <h4 className="my-4">
                      <hr />
                      <strong>بيانات عامة</strong>
                    </h4>
                    <h6 className="my-4">
                      <strong>رقم الفاتورة</strong>: {invoices[0].id}
                    </h6>
                    <h6 className="my-4">
                      <strong>الفرع</strong>: {invoices[0].branch_id}
                    </h6>
                    <h6 className="my-4">
                      <strong>تاريخ انشاء الفاتورة</strong>:{" "}
                      {invoices[0].StartDate}
                    </h6>
                    <h6 className="my-4">
                      <strong>تاريخ انتهاء الفاتورة</strong>:{" "}
                      {invoices[0].endDate}
                    </h6>
                    <h6 className="my-4">
                      <strong>حالة الفاتورة</strong>:{" "}
                      {whatTheState(invoices[0].BillState)}
                    </h6>
                    <h6 className="my-4">
                      <strong>رقم الرافعة</strong>: {invoices[0].numCrane}
                    </h6>
                    <h6 className="my-4">
                      <strong>انشاء الفاتورة بوساطة</strong>: {invoices[0].by}
                    </h6>
                    <h6 className="my-4">
                      <strong>الملاحظات</strong>: {invoices[0].note}
                    </h6>
                    <hr />
                    {/* ----------------------------------------------- */}
                    <div className="buttons mt-3 mb-5">
                      <button
                        className="min mx-2"
                        onClick={(e) => {
                          e.preventDefault();
                          history.goBack();
                        }}
                      >
                        العودة
                      </button>
                      {invoices[0].BillState === "UnderConstruction" ? (
                        <button
                          className="min mx-2"
                          onClick={() => {
                            DeleteBill(user, invoices[0].id);
                          }}
                        >
                          حذف
                        </button>
                      ) : (
                        ""
                      )}
                      {(invoices[0].BillState === "Finished") ? (
                        <button
                          className="min mx-2"
                          onClick={(e) => {
                            e.preventDefault();
                            const doc = new jsPDF("l","pt")
                            html2canvas(<h1>I Love Youe</h1>).then(t=>{
                              doc.addImage(t.toDataURL("image/png","PNG"))
                            })
                            doc.save("Dow.pdf")
                          }}
                        >
                          طباعة{" "}
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Error_Page kind={400} />
      )}
    </>
  );
}
export default BillPage;

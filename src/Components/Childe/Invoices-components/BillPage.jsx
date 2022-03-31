// Import Components
import Header from "../General-components/Header/Header";
import Sidebar from "../General-components/Sidebar/Sidebar";
import Error_Page from "../../Parents/Error_Page/Error_Page";
import Loader from "../../Parents/Loader/Loader";
import { DeleteBill } from "../../../Function/Cards";
// import Lib
import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import { GetUser } from "../../../Function/Generel";

function BillPage() {
  const user = GetUser()
  const [invoices, setInvoices] = useState([]);
  const [stateFetch, setStateFetch] = useState(false);
  const [active, setActive] = useState(0);
  const location = useLocation();
  const idBill = location.pathname.split("/")[3];
  const history = useHistory();
  const PajeRef = useRef(null);
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
        `https://peaceful-depths-13311.herokuapp.com/print/${idBill}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-tokens": user.token,
          },
        }
      );
      let resJson = await res.json();
      setInvoices(resJson["ALL Cards"]);
      setStateFetch(true);
    } catch (err) {
      // setStateFetch(true);
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
                    <div className="rtl me-3" ref={(el) => (PajeRef.current = el)}>
                      {/* ---------------------------------------------------- */}
                      <h4 className="my-4">
                        <hr />
                        <strong>بيانات العميل</strong>
                      </h4>
                      <h6 className="my-4">
                        <strong>الاسم</strong>: {invoices.bill.name}
                      </h6>
                      <h6 className="my-4">
                        <strong>رقم الجوال</strong>: {invoices.bill.phoneNum}
                      </h6>
                      <h6 className="my-4">
                        <strong>الإيميل</strong>: {invoices.bill.email}
                      </h6>
                      {/* ---------------------------------------------------- */}
                      <h4 className="my-4">
                        <hr />
                        <strong>بيانات المركبة</strong>
                      </h4>
                      <h6 className="my-4">
                        <strong>المصنع</strong>: {invoices.bill.vactor}
                      </h6>
                      <h6 className="my-4">
                        <strong>النوع</strong>: {invoices.bill.type}
                      </h6>
                      <h6 className="my-4">
                        <strong>اللوحة</strong>: {invoices.bill.numOfLicense}
                      </h6>
                      <h6 className="my-4">
                        <strong>سنة الصنع</strong>: {invoices.bill.year}
                      </h6>
                      <h6 className="my-4">
                        <strong>العدّاد</strong>: {invoices.bill.numaCounter}
                      </h6>
                      <h6 className="my-4">
                        <strong>VIN رقم الـ</strong>: {invoices.bill.numVin}
                      </h6>
                      {/* ---------------------------------------------------- */}
                      <h4 className="my-4">
                        <hr />
                        <strong>بيانات الخدمة والتكلفة</strong>
                      </h4>
                      <h6 className="my-4">
                        <strong>نوع الخدمة</strong>: {invoices.bill.nameService}
                      </h6>
                      <h6 className="my-4">
                        <strong>رقم الخدمة</strong>: {invoices.bill.typeService}
                      </h6>
                      <h6 className="my-4">
                        <strong>التكلفة</strong>: {invoices.bill.cost}
                      </h6>
                      <h6 className="my-4">
                        <strong>التكلفة النهائية</strong>:{" "}
                        {invoices.bill.totalCost}
                      </h6>
                      <h6 className="my-4">
                        <strong>الخصم</strong>:{" "}
                        {Number(invoices.bill.cost) -
                          Number(invoices.bill.totalCost)}
                      </h6>
                      {/* ---------------------------------------------------- */}
                      <h4 className="my-4">
                        <hr />
                        <strong>بيانات عامة</strong>
                      </h4>
                      <h6 className="my-4">
                        <strong>رقم الفاتورة</strong>: {invoices.bill.id}
                      </h6>
                      <h6 className="my-4">
                        <strong>الفرع</strong>: {invoices.bill.branch_id}
                      </h6>
                      <h6 className="my-4">
                        <strong>تاريخ انشاء الفاتورة</strong>:{" "}
                        {invoices.bill.StartDate}
                      </h6>
                      <h6 className="my-4">
                        <strong>تاريخ انتهاء الفاتورة</strong>:{" "}
                        {invoices.bill.endDate}
                      </h6>
                      <h6 className="my-4">
                        <strong>حالة الفاتورة</strong>:{" "}
                        {whatTheState(invoices.bill.BillState)}
                      </h6>
                      <h6 className="my-4">
                        <strong>رقم الرافعة</strong>: {invoices.bill.numCrane}
                      </h6>
                      <h6 className="my-4">
                        <strong>انشاء الفاتورة بوساطة</strong>:{" "}
                        {invoices.bill.by}
                      </h6>
                      <h6 className="my-4">
                        <strong>الملاحظات</strong>: {invoices.bill.note}
                      </h6>
                      <hr />
                      {/* ----------------------------------------------- */}
                    </div>
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
                      {invoices.bill.BillState === "UnderConstruction" ? (
                        <button
                          className="min mx-2"
                          onClick={() => {
                            DeleteBill(user, invoices.bill.id);
                          }}
                        >
                          حذف
                        </button>
                      ) : (
                        ""
                      )}
                      {/* {invoices.bill.BillState === "Finished" ? (
                        <button
                          className="min mx-2"
                          onClick={(e) => {
                            e.preventDefault();
                            
                          }}
                        >
                          طباعة{" "}
                        </button>
                      ) : (
                        ""
                      )} */}
                      <ReactToPrint
                        trigger={() => (
                          <button className="min mx-2">طباعة</button>
                        )}
                        content={() => PajeRef.current}
                      />
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

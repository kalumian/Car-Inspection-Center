// Components
import Header from "../../Childe/General-components/Header/Header";
import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";
import Loader from "../Loader/Loader";
// Lib
import { useState, useEffect } from "react";
import { GetUser } from "../../../Function/Generel";

function Cards() {
  const user = GetUser()
  const [inquiry, setInquiry] = useState([{ StartDate: "" }]);
  const [search, setSearch] = useState("");
  const [afterFilter, setAfterFilter] = useState([]);
  const [stateFetch, setStateFetch] = useState(false);

  useEffect(async () => {
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
      setStateFetch(true);
      setInquiry(resJson["ALL Bills"]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // let getBillsWithDateNewStracher = getBillsWithDate
  //   .map((i) => {
  //     return Number(i.totalCost);
  //   })
  //   .reduce((a, b) => {
  //     return a + b;
  //   }, 0);

  return (
    <>
      {user.type === "المشرف" ? (
        <>
          <div
            className="d-flex wrapper flex-row-reverse"
            onClick={() => console.log(afterFilter)}
          >
            <Sidebar user={user} />{" "}
            <div className="container-fluid px-4">
              <Header user={user} />
              <div className="cards  flex-wrap d-flex justify-content-around">
                <div className="row mx-1 my-2 mt-5">
                  <h2 className="text-center mt-3">استعلام التقرير</h2>
                  <div class="input-group mb-3 mt-4 rtl">
                    <span
                      class="input-group-text"
                      id="basic-addon1"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.preventDefault();
                        setAfterFilter(
                          inquiry.filter((i) => {
                            return search === i.StartDate;
                          })
                        );
                      }}
                    >
                      <i className="fas fa-search"></i>
                    </span>
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="form-control"
                      placeholder="إدخال تاريخ , مثال : 2022-03-26"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                {stateFetch ? (
                  <>
                    <table class="table table-striped table-hover text-center rtl mt-3 w-75">
                      <thead>
                        <tr>
                          <td>التاريخ</td>
                          <td>عدد الفواتيرة</td>
                          <td>الإجمال المالي</td>
                          <td>طريقة الدفع</td>
                        </tr>
                      </thead>
                      {afterFilter.length ? (
                        <tbody>
                          <tr>
                            <td>{afterFilter[0].StartDate}</td>
                            <td>{afterFilter.length}</td>
                            <td>
                              {afterFilter
                                .map((i) => {
                                  return Number(i.totalCost);
                                })
                                .reduce((a, b) => {
                                  return a + b;
                                }, 0)}
                            </td>
                            <td>كاش</td>
                          </tr>
                        </tbody>
                      ) : (
                        <></>
                      )}
                    </table>
                  </>
                ) : (
                  <Loader />
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

export default Cards;

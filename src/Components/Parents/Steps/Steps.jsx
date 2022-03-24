//  Import Components
import Header from "../../Childe/General-components/Header/Header";
import Section from "../../Childe/Steps-Components/Section";
import Computer from "../../Childe/Steps-Components/Computer/Computer";
import UnderCar from "../../Childe/Steps-Components/UnderCar/UnderCar";
import Body from "../../Childe/Steps-Components/Body/Body";
import FieldTrial from "../../Childe/Steps-Components/FieldTrial/FieldTrial";
import Loader from "../Loader/Loader";
import Error_Page from "../Error_Page/Error_Page";
import Timer from "../../Childe/Steps-Components/Timer/Timer";

//  Import from Lib
import { Link, useLocation, useHistory } from "react-router-dom";
import { useState, useEffect } from "react/cjs/react.development";
import { FinishBill } from "../../../Function/Cards";

function Steps({ user }) {
  const location = useLocation();
  const history = useHistory();
  // State
  const [steps, setSteps] = useState("");
  const [fetchState, setFetchState] = useState(false);
  const [card, setCard] = useState([]);
  const [cardsId, setCardsId] = useState([]);
  const [timer_b, setTimer_b] = useState(false);
  const [timer_c, setTimer_c] = useState(false);
  const [timer_u, setTimer_u] = useState(false);
  const [timer_s, setTimer_s] = useState(false);
  const [control_b, setControl_b] = useState(true);
  const [control_c, setControl_c] = useState(true);
  const [control_u, setControl_u] = useState(true);
  const [control_s, setControl_s] = useState(true);
  const [message, setMessage] = useState("");
  const [snap, setSnap] = useState(0);
  const id = location.pathname.split("/")[3].split("-")[2];
  const bill_id = location.pathname.split("/")[3].split("-")[1];

  // UseEffect
  useEffect(async () => {
    try {
      let res = await fetch(
        "https://peaceful-depths-13311.herokuapp.com/cards",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-tokens": user.token,
          },
        }
      );
      let resJson = await res.json();
      if (resJson.success) {
        setCard(
          resJson["ALL Cards"].filter((i) => {
            return i.bill_id == Number(bill_id) && i.id == Number(id);
          })[0]
        );
        setCardsId(
          resJson["ALL Cards"]
            .map((i) => {
              return i.bill_id;
            })
            .indexOf(Number(bill_id)) > -1
        );
        setFetchState(true);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  // Fumction
  return (
    <div className="container-steps text-center">
      <Header user="الفني" />
      {user.type === "الفني" || user.type === "المشرف" ? (
        <>
          {cardsId ? (
            <>
              {fetchState ? (
                <>
                  <div className="steps">
                    {/* -------------------- */}
                    <div className="info shadow">
                      <div className="info-car">
                        <span>
                          {card.vactor} - {card.type} :{" "}
                          <i className="fas fa-car"></i>
                        </span>
                        <span>
                          2 1 3 4 - ي س ب س : <i className="fas fa-list-ol"></i>
                        </span>
                        <span>
                          VIN: {card.NumVin} :{" "}
                          <i className="fas fa-closed-captioning"></i>
                        </span>
                      </div>
                      <ul>
                        {card.typeService.map((i) => {
                          if (i === "جسم-المركبة") {
                            return (
                              <Link
                                onClick={() =>
                                  control_b ? setSteps("فحص جسم المركبة") : ""
                                }
                              >
                                <li onClick={() => setTimer_b(true)}>
                                  <Timer
                                    id={card.id}
                                    user={user}
                                    initialMinute={10}
                                    start={timer_b}
                                    type={"فحص جسم المركبة"}
                                  />
                                  فحص جسم المركبة
                                  <i className="fas fa-car-crash pe-2"></i>
                                </li>
                              </Link>
                            );
                          } else if (i === "كمبيوتر") {
                            return (
                              <Link
                                onClick={() =>
                                  control_c ? setSteps("فحص الكمبيوتر") : ""
                                }
                              >
                                <li onClick={() => setTimer_c(true)}>
                                  <Timer
                                    id={card.id}
                                    user={user}
                                    initialMinute={7}
                                    start={timer_c}
                                    type={"فحص الكمبيوتر"}
                                  />
                                  فحص الكمبيوتر{" "}
                                  <i className="fas fa-desktop pe-2"></i>
                                </li>
                              </Link>
                            );
                          } else if (i === "ميداني") {
                            return (
                              <Link
                                onClick={() => setSteps("التجريب الميداني")}
                              >
                                <li
                                  onClick={() =>
                                    control_s ? setTimer_s(true) : ""
                                  }
                                >
                                  <Timer
                                    id={card.id}
                                    user={user}
                                    initialMinute={8}
                                    start={timer_s}
                                    type={"التجريب الميداني"}
                                  />
                                  التجريب الميداني{" "}
                                  <i className="fas fa-tachometer-alt pe-2"></i>
                                </li>
                              </Link>
                            );
                          } else if (i === "اسفل-السيارة") {
                            return (
                              <Link onClick={() => setSteps("اسفل السيارة")}>
                                <li
                                  onClick={() =>
                                    control_u ? setTimer_u(true) : ""
                                  }
                                >
                                  <Timer
                                    id={card.id}
                                    user={user}
                                    initialMinute={5}
                                    start={timer_u}
                                    type={"اسفل السيارة"}
                                  />
                                  فحص اسفل{" "}
                                  <i className="fas fa-car-battery pe-2"></i>
                                </li>
                              </Link>
                            );
                          }
                        })}
                      </ul>
                    </div>
                    {/* -------------------- */}

                    {steps === "فحص جسم المركبة" && control_b === true ? (
                      <Section
                        Component={Body}
                        title="فحص جسم المركبة"
                        snap={snap}
                        user={user}
                        setSnap={setSnap}
                        control={setControl_b}
                        setTimer={setTimer_b}
                      />
                    ) : steps === "فحص الكمبيوتر" && control_c === true ? (
                      <Section
                        Component={Computer}
                        title="فحص الكمبيوتر"
                        snap={snap}
                        user={user}
                        setSnap={setSnap}
                        setTimer={setTimer_c}
                        control={setControl_c}
                      />
                    ) : steps === "اسفل السيارة" && control_u === true ? (
                      <Section
                        Component={UnderCar}
                        title="اسفل السيارة"
                        snap={snap}
                        user={user}
                        setTimer={setTimer_u}
                        setSnap={setSnap}
                        control={setControl_u}
                      />
                    ) : steps === "التجريب الميداني" && control_s === true ? (
                      <Section
                        Component={FieldTrial}
                        title="التجريب الميداني"
                        snap={snap}
                        user={user}
                        setTimer={setTimer_s}
                        setSnap={setSnap}
                        control={setControl_s}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                  <button
                    className="min mb-2"
                    onClick={() => {
                      if (card.typeService.length === snap) {
                        FinishBill(id, user).then(() => history.goBack());
                      } else {
                        setMessage("لا يمكن انهاء الفحص قبل اجراء جميع الفحوص");
                      }
                    }}
                  >
                    انهاء الفحص
                  </button>
                  <div
                    className={`message my-3 me-2 ${
                      message === "تأكد من المدخلات ومن شبكة الانترنت لديك"
                        ? "text-danger"
                        : "text-danger"
                    }`}
                  >
                    {message}
                  </div>
                </>
              ) : (
                <Loader />
              )}
            </>
          ) : (
            <Error_Page kind={404} />
          )}
        </>
      ) : (
        <Error_Page kind={400} />
      )}
    </div>
  );
}

export default Steps;

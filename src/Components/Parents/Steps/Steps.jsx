import Header from "../../Childe/General-components/Header/Header";
import Section from "../../Childe/Steps-Components/Section";
import { Link } from "react-router-dom";
import Computer from "../../Childe/Steps-Components/Computer/Computer";
import UnderCar from "../../Childe/Steps-Components/UnderCar/UnderCar";
import Body from "../../Childe/Steps-Components/Body/Body";
import FieldTrial from "../../Childe/Steps-Components/FieldTrial/FieldTrial";
import { useState } from "react/cjs/react.development";
import Timer from "../../Childe/Steps-Components/Timer/Timer";
function Steps() {
  const [steps, setSteps] = useState("");
  // const [stateStep, setStateStep] = useState(true);
  const [timer_b, setTimer_b] = useState(false);
  const [timer_c, setTimer_c] = useState(false);
  const [timer_u, setTimer_u] = useState(false);
  const [timer_s, setTimer_s] = useState(false);
  const [allTime, setAllTime] = useState(false);
  const handleTime = (alltime) => {
    setAllTime(alltime);
  };
  return (
    <div className="container-steps text-center">
      <Header user="الفني" />
      <div className="steps">
        <div className="info shadow">
          <div className="info-car">
            <span>
              جيب - ربع : <i className="fas fa-car"></i>
            </span>
            <span>
              2 1 3 4 - ي س ب س : <i className="fas fa-list-ol"></i>
            </span>
            <span>
              VIN: 2134 : <i className="fas fa-closed-captioning"></i>
            </span>
          </div>
          <ul>
            <Link onClick={() => setSteps("فحص جسم المركبة")}>
              <li onClick={() => setTimer_b(true)}>
                <Timer
                  handleTime={handleTime}
                  initialMinute={10}
                  start={timer_b}
                />
                فحص جسم المركبة <i className="fas fa-car-crash pe-2"></i>
              </li>
            </Link>
            <Link onClick={() => setSteps("فحص الكمبيوتر")}>
              <li onClick={() => setTimer_c(true)}>
                <Timer
                  handleTime={handleTime}
                  initialMinute={7}
                  start={timer_c}
                />
                فحص الكمبيوتر <i className="fas fa-desktop pe-2"></i>
              </li>
            </Link>
            <Link onClick={() => setSteps("اسفل السيارة")}>
              <li onClick={() => setTimer_u(true)}>
                <Timer
                  handleTime={handleTime}
                  initialMinute={5}
                  start={timer_u}
                />
                فحص اسفل <i className="fas fa-car-battery pe-2"></i>
              </li>
            </Link>
            <Link onClick={() => setSteps("التجريب الميداني")}>
              <li onClick={() => setTimer_s(true)}>
                <Timer
                  handleTime={handleTime}
                  initialMinute={8}
                  start={timer_s}
                />
                التجريب الميداني <i className="fas fa-tachometer-alt pe-2"></i>
              </li>
            </Link>
          </ul>
        </div>
        {steps === "فحص جسم المركبة" ? (
          <Section Component={Body} title="فحص جسم المركبة" />
        ) : steps === "فحص الكمبيوتر" ? (
          <Section Component={Computer} title="فحص الكمبيوتر" />
        ) : steps === "اسفل السيارة" ? (
          <Section Component={UnderCar} title="اسفل السيارة" />
        ) : steps === "التجريب الميداني" ? (
          <Section Component={FieldTrial} title="التجريب الميداني" />
        ) : (
          <></>
        )}
      </div>
      <button
        className="min mb-2"
        onClick={() => {
          setTimer_b("finish");
          setTimer_u("finish");
          setTimer_c("finish");
          setTimer_s("finish");
        }}
      >
        انهاء الفحص
      </button>
    </div>
  );
}

export default Steps;

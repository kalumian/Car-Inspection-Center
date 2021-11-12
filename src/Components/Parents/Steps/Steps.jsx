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
  const [stateSteps, setStateSteps] = useState("");
  const [timer_b, setTimer_b] = useState(false);
  const [timer_c, setTimer_c] = useState(false);
  const [timer_u, setTimer_u] = useState(false);
  const [timer_s, setTimer_s] = useState(false);
  return (
    <div className="container-steps">
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
            <Link onClick={() => setStateSteps("فحص جسم المركبة")}>
              <li onClick={setTimer_b}>
                <Timer initialMinute={10} start={timer_b} />
                فحص جسم المركبة <i className="fas fa-car-crash pe-2"></i>
              </li>
            </Link>
            <Link onClick={() => setStateSteps("فحص الكمبيوتر")}>
              <li onClick={setTimer_c}>
                <Timer initialMinute={7} start={timer_c} />
                فحص الكمبيوتر <i className="fas fa-desktop pe-2"></i>
              </li>
            </Link>
            <Link onClick={() => setStateSteps("اسفل السيارة")}>
              <li onClick={setTimer_u}>
                <Timer initialMinute={5} start={timer_u} />
                فحص اسفل <i className="fas fa-car-battery pe-2"></i>
              </li>
            </Link>
            <Link onClick={() => setStateSteps("التجريب الميداني")}>
              <li onClick={setTimer_s}>
                <Timer initialMinute={8} start={timer_s} />
                التجريب الميداني <i className="fas fa-tachometer-alt pe-2"></i>{" "}
              </li>
            </Link>
          </ul>
        </div>
        {stateSteps === "فحص جسم المركبة" ? (
          <Section Component={Body} title="فحص جسم المركبة" />
        ) : stateSteps === "فحص الكمبيوتر" ? (
          <Section Component={Computer} title="فحص الكمبيوتر" />
        ) : stateSteps === "اسفل السيارة" ? (
          <Section Component={UnderCar} title="اسفل السيارة" />
        ) : stateSteps === "التجريب الميداني" ? (
          <Section Component={FieldTrial} title="التجريب الميداني" />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Steps;

import Header from "../../Childe/General-components/Header/Header";
import Section from "../../Childe/Steps-Components/Section";
import { Link } from "react-router-dom";
import Computer from "../../Childe/Steps-Components/Computer/Computer";
import UnderCar from "../../Childe/Steps-Components/UnderCar/UnderCar";
import Body from "../../Childe/Steps-Components/Body/Body";
import FieldTrial from "../../Childe/Steps-Components/FieldTrial/FieldTrial";
import { useState } from "react/cjs/react.development";
function Steps() {
  const [stateSteps, setStateSteps] = useState("");
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
            <Link onClick={() => setStateSteps("بودي")}>
              <li>
                فحص جسم المركبة <i className="fas fa-car-crash pe-2"></i>
              </li>
            </Link>
            <Link onClick={() => setStateSteps("كمبيوتر")}>
              <li>
                فحص الكمبيوتر <i className="fas fa-desktop pe-2"></i>
              </li>
            </Link>
            <Link onClick={() => setStateSteps("اسفل")}>
              <li>
                فحص اسفل <i className="fas fa-car-battery pe-2"></i>
              </li>
            </Link>
            <Link onClick={() => setStateSteps("ميدان")}>
              <li>
                التجريب الميداني <i className="fas fa-tachometer-alt pe-2"></i>
              </li>
            </Link>
          </ul>
        </div>
        {stateSteps === "بودي" ? (
          <Section Component={Body} title="فحص جسم المركبة" />
        ) : stateSteps === "كمبيوتر" ? (
          <Section Component={Computer} title="فحص الكمبيوتر" />
        ) : stateSteps === "اسفل" ? (
          <Section Component={UnderCar} title="اسفل السيارة" />
        ) : stateSteps === "ميدان" ? (
          <Section Component={FieldTrial} title="التجريب الميداني" />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Steps;

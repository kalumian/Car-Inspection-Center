import Header from "../../Childe/General-components/Header/Header";
import Section from "../../Childe/Steps-Components/Section";
import { Link } from "react-router-dom";
import Computer from "../../Childe/Steps-Components/Computer/Computer";
import UnderCar from "../../Childe/Steps-Components/UnderCar/UnderCar";
import Body from "../../Childe/Steps-Components/Body/Body";
import FieldTrial from "../../Childe/Steps-Components/FieldTrial/FieldTrial";
function Steps() {
  return (
    <div className="container-steps">
      <Header user="الفني" />
      <div className="steps">
        <div className="info">
          <div className="info-car">
            <span>جيب - ربع</span>
            <span>2 1 3 4 - ي س ب س</span>
            <span>VIN: 2134</span>
          </div>
          <ul>
            <Link to="/">
              <li>فحص كمبيوتر</li>
            </Link>
            <Link to="/">
              <li>فحص بودي</li>
            </Link>
            <Link to="/">
              <li>فحص محركات</li>
            </Link>
            <Link to="/">
              <li>فحص مكينة</li>
            </Link>
          </ul>
        </div>
        <Section Component={Body} title="فحص البودي" />
        <Section Component={Computer} title="فحص كمبيوتر" />
        <Section Component={UnderCar} title="اسفل السيارة" />
        <Section Component={FieldTrial} title="التجريب الميداني" />
      </div>
    </div>
  );
}

export default Steps;

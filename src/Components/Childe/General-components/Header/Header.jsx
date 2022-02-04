// Import From Lib
import { useState } from "react";

// Import Data Fromt useContext
import { useContext } from "react";
import { DataContext } from "../../../../DataContext";

// import Function
import { GettoDayArabic, GetHours, GetMin } from "../../../../Function/Times";
function Header() {
  // Import User
  const { user } = useContext(DataContext);
  // useState
  const [date, setDate] = useState(new Date());

  const time = date;
  setInterval(() => setDate(new Date()), 9999);

  return (
    <header className="header">
      <div className="info">
        <p>
          <span>
            {user.name} <i class="fas fa-user"></i>
          </span>
          <span>{user.type}</span>
        </p>
        <p>
          <span>{time.getDate()}</span> :التاريخ
        </p>
        <p>
          اليوم: <span>{GettoDayArabic(time)}</span>
        </p>
        <p>
          <span>
            {GetHours(time)}:
            {GetMin(time)}
          </span>{" "}
          :التوقيت
        </p>
      </div>
      <div className="icons">
        <i className="fas fa-globe-americas"></i>
      </div>
    </header>
  );
}

export default Header;

import { useEffect, useState } from "react";

function Header({ user }) {
  const [date, setDate] = useState(new Date());
  const time = date;
  const days = [
    "الاحد",
    "الاثنين",
    "الثلاثاء",
    "الاربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  setInterval(() => setDate(new Date()), 9999);

  return (
    <header className="header">
      <div className="info">
        <p>
          <span>
            احمد علي جابر <i class="fas fa-user"></i>
          </span>
          <span>{user}</span>
        </p>
        <p>
          <span>{time.getDate()}</span> :التاريخ
        </p>
        <p>
          اليوم: <span>{days[time.getDay()]}</span>
        </p>
        <p>
          <span>
            {(time.getHours() + 24) % 12 || 12}:
            {time.getMinutes() === 0
              ? "00"
              : time.getMinutes() >= 10
              ? time.getMinutes()
              : "0" + time.getMinutes()}
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

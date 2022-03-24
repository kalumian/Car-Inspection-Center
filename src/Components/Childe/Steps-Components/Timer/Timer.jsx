import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Notification } from "../../../../Function/Generel";
import { GetFullDateStringWithHourAndMin } from "../../../../Function/Times";

function Timer({ initialMinute = 30, initialSeconds = 0, start, user, type }) {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [timeState, setTimeState] = useState(true);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (start) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            setTimeState(false);
            Notification(user, {
              date: GetFullDateStringWithHourAndMin(),
              message: ` تم انتهاء الوقت المحدد لفحص ال ${type} بواسطة ${user.name}`,
            });
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds, minutes, start]);
  return (
    <span className={`${!timeState ? "text-danger" : "text-success"} ps-2`}>
      {minutes}:{seconds}
    </span>
  );
}

export default Timer;

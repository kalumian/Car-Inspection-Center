import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function Timer({
  initialMinute = 30,
  initialSeconds = 0,
  handleTimerState,
  start,
}) {
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
            handleTimerState();
            setTimeState(false);
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
  });
  return (
    <span className={`${!timeState ? "text-danger" : "text-success"} ps-2`}>
      {minutes}:{seconds}
    </span>
  );
}

export default Timer;

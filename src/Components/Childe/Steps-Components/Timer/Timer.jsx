import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function Timer({ initialMinute = 30, initialSeconds = 0, start, handleTime }) {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [timeState, setTimeState] = useState(true);
  useEffect(() => {
    if (start === "finish") {
      handleTime({
        time:
          (minutes * 60 + seconds - initialMinute * 60 + initialSeconds) * -1,
      });
    }
    let myInterval = setInterval(() => {
      if (start !== "finish" && start) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
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
  }, [seconds, minutes, start]);
  return (
    <span className={`${!timeState ? "text-danger" : "text-success"} ps-2`}>
      {minutes}:{seconds}
    </span>
  );
}

export default Timer;

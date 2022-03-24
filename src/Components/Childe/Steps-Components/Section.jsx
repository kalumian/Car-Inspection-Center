import { useEffect, useState } from "react/cjs/react.development";
import Timer from "./Timer/Timer";

function Section({ Component, title, snap, setSnap, control, setTimer, user }) {
  return (
    <div className="section shadow">
      <h2 className="section-title">{title}</h2>
      <Component
        snap={snap}
        setSnap={setSnap}
        control={control}
        setTimer={setTimer}
        user={user}
      />
    </div>
  );
}

export default Section;

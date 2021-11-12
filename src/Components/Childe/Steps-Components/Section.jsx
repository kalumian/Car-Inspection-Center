import { useEffect, useState } from "react/cjs/react.development";
import Timer from "./Timer/Timer";

function Section({ Component, title }) {
  return (
    <div className="section shadow">
      <h2 className="section-title">{title}</h2>
      <Component />
    </div>
  );
}

export default Section;

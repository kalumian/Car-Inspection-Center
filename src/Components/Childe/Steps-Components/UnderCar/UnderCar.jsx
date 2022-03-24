import UnderCar_section from "./UnderCar_section";
import checks from "../../../../Json/checks.json";
import { useState } from "react";

function UnderCar({ snap, setSnap, control, setTimer, user }) {
  // Functions
  function handleObjectsWithId(arr) {
    return arr.map((i) => {
      return { title: i, id: Math.random() };
    });
  }

  // -----------------------------
  // function
  const brake = handleObjectsWithId(checks.brake);
  const suspension_and_steering = handleObjectsWithId(
    checks.suspension_and_steering
  );
  const engine = handleObjectsWithId(checks.engine);
  const differential = handleObjectsWithId(checks.differential);
  const conditioner = handleObjectsWithId(checks.conditioner);
  const accessories = handleObjectsWithId(checks.accessories);
  return (
    <div className="content underCar text-center">
      <UnderCar_section title="نظام الفرامل" options={brake} />
      <UnderCar_section
        title="نظام التعليق والتوجيه"
        options={suspension_and_steering}
      />
      <UnderCar_section title="نظام المحرّك" options={engine} />
      <UnderCar_section title="نظام القير والدفرنس" options={differential} />
      <UnderCar_section title="نظام التكييف" options={conditioner} />
      <UnderCar_section title="الاكسسوارات" options={accessories} />
      <button
        className="save"
        onClick={(e) => {
          e.preventDefault();
          setSnap(snap + 1);
          setTimer(false);
          control(false);
        }}
      >
        حفظ
      </button>
    </div>
  );
}

export default UnderCar;

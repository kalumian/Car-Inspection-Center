import { useState } from "react/cjs/react.development";

function FieldTrial() {
  const [note, setNote] = useState("");
  return (
    <div className="mt-6">
      <textarea
        className="form-control mt-4"
        placeholder={`ملاحظات الفحص الميداني`}
        id={`note-${"ملاحظات الفحص الميداني"}`}
        name="desc"
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
      ></textarea>
    </div>
  );
}

export default FieldTrial;

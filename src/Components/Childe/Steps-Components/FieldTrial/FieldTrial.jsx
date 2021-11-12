import { useState } from "react/cjs/react.development";

function FieldTrial() {
  const [note, setNote] = useState("");
  
  return (
    <div className="mt-6 text-center">
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
      <button className="save mt-3">حفظ</button>
    </div>
  );
}

export default FieldTrial;

import SearchBar from "./SearchBar";
import { useState } from "react";
import Check from "./Check";
function UnderCar_section({ title, options }) {
  const [checks, setChecks] = useState([]);
  const [note, setNote] = useState("");
  const [radio1, setRadiu1] = useState("مخ القير او valve مفكوك");
  const [radio2, setRadiu2] = useState("مخ القير او valve مفكوك");
  const [search, setSearch] = useState("");
  const handleCheck = ({ target }) => {
    setChecks([...checks, target.value]);
  };
  return (
    <div className="field d-flex flex-column shadow-sm border ">
      <h2 className="title-field">{title}</h2>

      <div className="checks d-flex flex-column rtl">
        <button
          className="save my-4 text-start"
          onClick={() => {
            console.log({
              title,
              data: [...checks, radio1, radio2],
              note,
            });
          }}
        >
          حفظ
        </button>
        <textarea
          className="form-control mt-4"
          placeholder={`ملاحظات قسم ${title}`}
          id={`note-${title}`}
          name="desc"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        ></textarea>
        {/* تشيك بوكس سحّاب خاص بنظام الفرامل ونظام المكينة */}
        {title === "نظام الفرامل" ? (
          <div className="my-5" style={{ width: "380px" }}>
            <ul className="sellect-title d-flex justify-content-between">
              <li>جرم قير مغير</li>
              <li>موضّب</li>
              <li>كارتير مفكوك</li>
              <li>مغير</li>
              <li>مخ القير او valve مفكوك</li>
            </ul>
            <input
              type="range"
              className="form-range"
              min="0"
              max="4"
              id="customRange2"
              onChange={({ target }) =>
                setRadiu1(
                  target.value == "0"
                    ? "مخ القير او valve مفكوك"
                    : target.value == "1"
                    ? "مغير"
                    : target.value == "2"
                    ? "كارتير مفكوك"
                    : target.value == "3"
                    ? "موضّب"
                    : target.value == "4"
                    ? "جرم قير مغير"
                    : ""
                )
              }
            />
          </div>
        ) : title === "نظام المحرّك" ? (
          <div className="my-5" style={{ width: "400px" }}>
            <ul className="sellect-title d-flex justify-content-between">
              <li>رأس مفكوك</li>
              <li>الطدر مفكوك</li>
              <li>كارتير المينيوم مفكوك</li>
              <li>كارتير حديدي مفكوك</li>
              <li>المكينة موضّبة</li>
              <li>المكينة مغيّرة</li>
            </ul>
            <input
              type="range"
              className="form-range"
              min="0"
              max="5"
              id="customRange2"
              onChange={({ target }) =>
                setRadiu2(
                  target.value == "0"
                    ? "المكينة مغيّرة"
                    : target.value == "1"
                    ? "المكينة موضّبة"
                    : target.value == "2"
                    ? "كارتير حديدي مفكوك"
                    : target.value == "3"
                    ? "كارتير المينيوم مفكوك"
                    : target.value == "4"
                    ? "الطدر مفكوك"
                    : target.value == "5"
                    ? "رأس مفكوك"
                    : ""
                )
              }
            />
          </div>
        ) : (
          <></>
        )}
        <SearchBar title={title} setSearch={setSearch} />
        {options
          .filter((i) => {
            return new RegExp(search, "ig").test(i.title);
          })
          .map((i) => {
            return (
              <Check name={i.title} key={i.id} handleCheck={handleCheck} />
            );
          })}
      </div>
    </div>
  );
}

export default UnderCar_section;

function Control({ setStatePage }) {
  return (
    <div className="buttons my-5 text-center py-2">
      <button className="save mx-2" onClick={() => setStatePage("اضافة")}>
        اضافة
      </button>
      <button className="save mx-2" onClick={() => setStatePage("تعديل")}>
        تعديل
      </button>
      <button className="save mx-2" onClick={() => setStatePage("ارسال")}>
        ارسال
      </button>
    </div>
  );
}

export default Control;

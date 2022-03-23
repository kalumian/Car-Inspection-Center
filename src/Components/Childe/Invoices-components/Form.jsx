function form({ user, handleChange, input, branches }) {
  return (
    <form className="rtl mt-5  px-4">
      <div className="d-flex justify-content-center flex-wrap">
        <div className="row mx-1 my-2">
          <div class="input-group">
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              onChange={handleChange}
              name="serachWithName"
              placeholder="البحث باسم العميل"
              value={input.serachWithName}
            />
          </div>
        </div>
        {/* <div className="row mx-1 my-2">
          <div class="input-group">
            <input
              type="text"
              autoComplete="off"
              class="form-control"
              placeholder="البحث برقم العميل"
              name={"serachWithNumbers"}
              onChange={handleChange}
            />
          </div>
        </div> */}
        <div className="row mx-1 my-2">
          <div class="input-group">
            <input
              type="text"
              autoComplete="off"
              class="form-control"
              placeholder="البحث بتاريخ الانشاء"
              name={"serachWithStartDate"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mx-1 my-2">
          <div class="input-group">
            <input
              type="text"
              autoComplete="off"
              class="form-control"
              placeholder="البحث برقم الفاتورة"
              name={"serachWithEndDate"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mx-1 my-2">
          <div class="input-group">
            <input
              type="text"
              autoComplete="off"
              class="form-control"
              placeholder="البحث برقم اللوحة"
              name={"serachWithNumOfLicense"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mx-1 my-2">
          <div class="input-group">
            <input
              type="text"
              autoComplete="off"
              class="form-control"
              placeholder="البحث بمٌنشئ الفاتورة"
              name={"serachWithCreatedBill"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mx-1 my-2">
          <div class="input-group">
            <input
              type="text"
              autoComplete="off"
              class="form-control"
              placeholder="البحث باسم الخدمة"
              name={"serachWithService"}
              onChange={handleChange}
            />
          </div>
        </div>
        {user.type === "المشرف" ? (
          <div className="row mx-1 my-2">
            <select
              className="form-select"
              onChange={handleChange}
              aria-label="Default select example"
              name="serachWithBranch"
            >
              <option selected>الفرع</option>
              {branches.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} | {item.id}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <></>
        )}
        <div className="row mx-1 my-2">
          <select
            className="form-select"
            onChange={handleChange}
            aria-label="Default select example"
            name="serachWithState"
          >
            <option selected value="">
              الحالة
            </option>
            <option value="Deleted">محذوفة</option>
            <option value="UnderConstruction">قيد التنفيذ</option>
            <option value="Finished">منتهية</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default form;

function form() {
    return (
        <form action="" className="rtl mt-5  px-4">
        <div className="d-flex justify-content-around flex-wrap">
          <div className="row mx-1 my-2">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                <i class="fas fa-search"></i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="البحث"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="row mx-1 my-2">
            <select
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>الفرع</option>
              <option value="1">ميكانيكي</option>
              <option value="2">يدوي</option>
              <option value="3">سريع</option>
            </select>
          </div>
          <div className="row mx-1 my-2">
            <select
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>الحالة</option>
              <option value="1">ميكانيكي</option>
              <option value="2">يدوي</option>
              <option value="3">سريع</option>
            </select>
          </div>
        </div>
      </form>
    )
}

export default form

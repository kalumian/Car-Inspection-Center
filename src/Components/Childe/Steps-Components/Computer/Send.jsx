import Lable from "../../Form_invoices-components/Lable";
function Send({ statePage, setStatePage }) {
  return (
    <dic className="content-computer w-100 ">
      <div className="check mt-4 w-75 justify-content-around d-flex">
        <div className="w-25 ms-4 text-center">
          <Lable
            For="invoices_customer_name"
            title="كود المشكلة"
            active={false}
          />
          <input
            type="text"
            className="form-control text-center"
            // value={input}
            // onChange={({ target }) => setInput(target.value)}
          />
        </div>
        <textarea
          className="form-control mt-3 w-75 me-4"
          placeholder="وصف كود المشكلة(نص غير قابل للتعديل)"
          id="computer-desc"
          name="desc"
          disabled="true"
        ></textarea>
      </div>
      <div className="buttons mt-5 text-center">
        <button className="save mx-2" onClick={() => setStatePage("كنترول")}>
          عودة
        </button>
        <button className="save mx-2">ارسال</button>
      </div>
    </dic>
  );
}

export default Send;

import Lable from "./Lable";
import Input_Default from "./Input_Default";
import Select from "./Select";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";

// Impoert Functions
import { getYears, GetFullDateString } from "../../../Function/Times";
import { DataContext } from "../../../DataContext";

function Form_lg({ setEditPage, editPage }) {
  //  Hooks
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleCard } = useContext(DataContext);
  const [message, setMessage] = useState(false);

  // Functions
  const onSubmit = (data) => {
    // handleCard({
    //   ...data,
    //   Created_date: GetFullDateString(),
    //   by: "",
    //   invoicesNumber: "",
    //   invoicesNumberBransh: "",
    // });

    // reset();
    // setMessage(true);
    // setTimeout(function () {
    //   setMessage(false);
    // }, 3000);
    console.log({ Created_date: GetFullDateString() });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
      <div className="row mt-5 ">
        <div className="col-4">
          <Lable For="invoices_customer_name" title="اسم العميل" />
          <Input_Default
            name="name_customer"
            id="invoices_customer_name"
            pler="محمد احمد"
            register={register}
          />
        </div>
        <div className="col-4">
          <Lable title="رقم الجوال" />
          <Input_Default
            name="number_customer"
            id="invoices_customer_number"
            pler="0501231231"
            register={register}
          />
        </div>
        <div className="col-4">
          <Lable title="البريد الإلكتروني" active={false} />
          <Input_Default
            req={false}
            name="email_customer"
            id="invoices_customer_email"
            pler="test@gmail.com"
            register={register}
          />
        </div>
      </div>
      <div className="row mt-4 primary-text">
        <div className="col-3">
          <Lable
            For="invoices_customer_board_number"
            title="رقم اللوحة (رقم)"
          />
          <Input_Default
            name="customer_board_number"
            id="invoices_customer_board_number"
            pler="1234"
            register={register}
          />
        </div>
        <div className="col-3">
          <Lable
            For="invoices_customer_board_number"
            title="رقم اللوحة (حرف)"
          />
          <Input_Default
            name="customer_board_letters"
            id="invoices_customer_board_letters"
            pler="ابتث"
            register={register}
          />
        </div>
        <div className="col-3">
          <Lable For="invoices_customer_crane" title="الرافعة" />
          <Input_Default
            name="customer_crane"
            id="invoices_customer_crane"
            type="number"
            register={register}
          />
        </div>
        <div className="col-3">
          <Lable For="invoices_customer_factory" title="المصنع" />
          <Input_Default
            name="customer_factory"
            id="invoices_customer_factory"
            pler="المصنع"
            register={register}
          />
        </div>
      </div>
      <div className="row mt-4 primary-text">
        <div className="col-4">
          <Lable For="invoices_customer_type" title="النوع" />
          <Input_Default
            name="customer_type"
            id="invoices_customer_type"
            pler="النوع"
            register={register}
          />
        </div>
        <div className="col-4">
          <Lable For="invoices_customer_speedometer" title="العدّاد" />
          <Input_Default
            name="customer_speedometer"
            id="invoices_customer_speedometer"
            pler="1 Km"
            register={register}
          />
        </div>
        <div className="col-4">
          <Lable For="invoices_customer_year" title="السنة" />
          <Select
            name="customer_motion_year"
            id="invoices_customer_year"
            register={register}
            select="اختيار السنة"
            options={getYears()}
          />
        </div>
      </div>
      <div className="row mt-4 primary-text">
        <div className="col-4">
          <Lable For="invoices_customer_VIN" title="#VIN" />
          <Input_Default
            name="customer_VIN"
            id="invoices_customer_VIN"
            pler="VIN"
            register={register}
          />
        </div>
        <div className="col-4">
          <Lable For="invoices_customer_service" title="النوع الخدمة" />
          <Select
            name="customer_motion_service"
            id="invoices_customer_service"
            register={register}
            select="النوع الخدمة"
            options={["فحص محركات شامل", "فحص جزئي"]}
          />
        </div>
        <div className="col-4 text-center">
          <Lable For="invoices_customer_cost" title="التكلفة" />
          <Input_Default
            name="customer_cost"
            id="invoices_customer_cost"
            register={register}
          />
        </div>
      </div>
      <div className="row mt-4 primary-text"></div>
      <div className="row mt-4 primary-text">
        <div className="col-4">
          <Lable For="invoices_customer_final_cost" title="لتكلفة النهائية" />
          <Input_Default
            name="customer_final_cost"
            id="invoices_customer_final_cost"
            register={register}
          />
        </div>
        <div className="col-4 mt-1">
          <button
            className="w-30 btn btn-lg primary-bg"
            onClick={(e) => {
              e.preventDefault();
              setEditPage(!editPage);
            }}
          >
            تعديل
          </button>
        </div>
      </div>
      <div className="row mt-4 primary-text">
        <textarea
          className="form-control"
          placeholder="ملاحظات"
          id="invoices_notes"
          name="notes"
          {...register("notes")}
        ></textarea>
      </div>
      {Boolean(
        errors.customer_VIN ||
          errors.customer_board_letters ||
          errors.customer_board_number ||
          errors.customer_cost ||
          errors.customer_crane ||
          errors.customer_factory ||
          errors.customer_final_cost ||
          errors.customer_motion_service ||
          errors.customer_motion_year ||
          errors.customer_speedometer ||
          errors.customer_type ||
          errors.name_customer ||
          errors.number_customer
      ) && (
        <p className="text-danger mt-5">
          الرجاء التأكد من تعبئة جميع الحقول بالشكل الصحيح
        </p>
      )}
      {message ? (
        <p className="text-success mt-5">تم انشاء الفاتورة بنجاح</p>
      ) : (
        <></>
      )}
      <div className="d-flex justify-content-center">
        <button className="w-30 btn btn-lg primary-bg" type="submit">
          انشاء
        </button>
      </div>
    </form>
  );
}

export default Form_lg;

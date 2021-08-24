import { Link } from "react-router-dom";
function Error_Page({ kind }) {
  return (
    <div className="error-page">
      {kind === 404 ? (
        <>
          <span>404</span>
          <span>هذه الصفحة غير موجودة</span>
        </>
      ) : kind === 400 ? (
        <>
          <span>ليس لديك صلاحية لدخول هذه الصفحة</span>
          <Link to="/dashboard">العودة الى الرئيسية</Link>
        </>
      ) : (
        <>
          <span>404</span>
          <span>هذه الصفحة غير موجودة</span>
        </>
      )}
    </div>
  );
}

export default Error_Page;

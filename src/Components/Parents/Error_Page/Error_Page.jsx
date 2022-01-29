import { useHistory, Link } from "react-router-dom";
function Error_Page({ kind }) {
  const History = useHistory();
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
          <Link onClick={() => History.goBack()} className="my-2">
            العودة للصفحة السابقة
          </Link>
          <Link to="/login">
              تسجيل الخروج
          </Link>
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

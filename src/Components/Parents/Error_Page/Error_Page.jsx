import { useHistory, Link } from "react-router-dom";

// import from NPM
import { useContext } from "react";

// Import DataContext
import { DataContext } from "../../../DataContext";

function Error_Page({ kind }) {
  const { ClearCookies } = useContext(DataContext);

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
          <Link to="/login" onClick={ClearCookies}>
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

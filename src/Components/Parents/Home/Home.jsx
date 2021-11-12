// Import Components
import Header from "../../Childe/General-components/Header/Header";
import Card_stats from "../../Childe/Home-components/Card_stats";
import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";
import Notifications from "../../Childe/Home-components/Notifications";

function Home({ user }) {
  return (
    <>
      {user === "المشرف" ? (
        <div className="d-flex wrapper flex-row-reverse">
          <Sidebar user={user} />
          <div className="container-fluid px-4 home">
            <Header user={user} />
            {/* Stats Components */}
            <div className="row g-3 my-2">
              <Card_stats
                title="الفحوصات المتبقية"
                icon="fas fa-ellipsis-h"
                count="457423"
              />
              <Card_stats
                title="إجمالي الفواتير"
                icon="far fa-copy"
                count="457423"
              />
              <Card_stats
                title="الفحوصات الشاملة"
                icon="fas fa-file-invoice"
                count="457423"
              />
            </div>
            {/* قائمة الاشعارات */}
            <Notifications />
          </div>
        </div>
      ) : (
        <Error_Page kind={400} />
      )}
    </>
  );
}

export default Home;

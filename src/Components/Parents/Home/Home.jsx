// Import Components
import Header from "../../Childe/General-components/Header/Header";
import Card_stats from "../../Childe/Home-components/Card_stats";
import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";

function Home({ user }) {
  return (
    <>
      {user === "المشرف" ? (
        <div className="d-flex wrapper flex-row-reverse">
          <Sidebar user={user} />
          <div className="container-fluid px-4">
            <Header user={user} />
            {/* Stats Components */}
            <div className="row g-3 my-2">
              <Card_stats
                title="فحوصات منتهية"
                icon="fas fa-file-invoice"
                count="457423"
              />
              <Card_stats
                title="فحوصات قيد التنفيذ"
                icon="fas fa-file-invoice"
                count="457423"
              />
              <Card_stats
                title="الفحوصات ملغية"
                icon="fas fa-file-invoice"
                count="457423"
              />
            </div>
          </div>
        </div>
      ) : (
        <Error_Page kind={400} />
      )}
    </>
  );
}

export default Home;

import Loader from "../Loader/Loader";
import Card_stats from "../../Childe/Home-components/Card_stats";
import Sidebar from "../../Childe/General-components/Sidebar-components/Sidebar";
function Home({ user }) {
  return (
    <div className="d-flex wrapper flex-row-reverse">
      <Sidebar user={user} />
      <div className="container-fluid px-4">
        <div className="row g-3 my-2">
          <Card_stats
            title="الفحوصات الشاملة"
            icon="fas fa-cogs"
            count="3123"
          />
          <Card_stats
            title="الفحوصات الجزئية"
            icon="fas fa-cogs"
            count="9876"
          />
          <Card_stats
            title="اجمالي الفحوصات"
            icon="fas fa-file-invoice"
            count="457423"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

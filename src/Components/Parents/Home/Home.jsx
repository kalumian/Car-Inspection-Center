// Import Components
import Header from "../../Childe/General-components/Header/Header";
import Card_stats from "../../Childe/Home-components/Card_stats";
import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";
import Notifications from "../../Childe/Home-components/Notifications";

// Import Data Fromt useContext
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { GetUser } from "../../../Function/Generel";
function Home() {
  const [notification, setNotification] = useState([]);
  const [stateFetch, setStateFetch] = useState(false);
  const [notificationFinde, setNotificationFinde] = useState(false);

  const user = GetUser();
  useEffect(async () => {
    setStateFetch(false);
    try {
      let res = await fetch(
        "https://peaceful-depths-13311.herokuapp.com/notification",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-tokens": user.token,
          },
        }
      );
      let resJson = await res.json();
      if (resJson.success) {
        const Notification = resJson["All notification"].map((i) => {
          const date = i.notification.split(",")[0];
          const content = i.notification.split(",")[1];
          const id = i.id;
          return { content, id, date };
        });
        setNotification(Notification.reverse());
        setStateFetch(true);
        setNotificationFinde(true);
      }
    } catch (err) {
      console.log(err);
      setStateFetch(true);
    }
  }, []);

  return (
    <>
      {user.type === "المشرف" ? (
        <div className="d-flex wrapper flex-row-reverse">
          <Sidebar />
          <div className="container-fluid px-4 home">
            <Header />
            {/* Stats Components */}
            {/* <div className="row g-3 my-2">
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
            </div> */}
            {/* قائمة الاشعارات */}
            {stateFetch ? (
              <Notifications
                notificationFinde={notificationFinde}
                notification={notification}
              />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      ) : (
        <Error_Page kind={400} />
      )}
    </>
  );
}

export default Home;

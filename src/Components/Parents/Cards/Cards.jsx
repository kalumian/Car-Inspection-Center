// Components
import Header from "../../Childe/General-components/Header/Header";
import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";
import Card from "../../Childe/Cards-Components/Card";
import Loader from '../Loader/Loader'
// Lib
import { DataContext } from "../../../DataContext";
import { useState, useEffect } from "react";

function Cards({ user }) {
  const [cards, setCards] = useState([]);
  const [stateFetch, setStateFetch] = useState(false);
  useEffect(async () => {
    try {
      let res = await fetch(
        "https://peaceful-depths-13311.herokuapp.com/cards",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-tokens": user.token,
          },
        }
      );
      let resJson = await res.json();
      setCards(resJson["ALL Cards"]);
      setStateFetch(true);
      console.log(resJson["ALL Cards"]);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      {user.type === "الفني" || user.type === "المشرف" ? (
        <>
          <div className="d-flex wrapper flex-row-reverse">
            <Sidebar user={user} />{" "}
            <div className="container-fluid px-4">
              <Header user={user} />
              <div className="cards  flex-wrap d-flex justify-content-around">
                {stateFetch
                  ? cards.map((item) => {
                      return (
                        <Card
                          Created_date={item.StartDate}
                          customer_motion_service={item.nameService}
                          customer_board={item.numOfLicense}
                          customer_VIN={item.NumVin}
                          customer_type={item.type}
                          customer_factory={item.vactor}
                          user={user}
                          id={item.id}
                          bill_id={item.bill_id}
                        />
                      );
                    })
                  : <Loader/>}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Error_Page kind={400} />
      )}
    </>
  );
}

export default Cards;

// Components
import Header from "../../Childe/General-components/Header/Header";
import Sidebar from "../../Childe/General-components/Sidebar/Sidebar";
import Error_Page from "../Error_Page/Error_Page";
import Card from "../../Childe/Cards-Components/Card";

// Lib
import { DataContext } from "../../../DataContext";
import { useContext } from "react";

function Cards({ user }) {
  const { cards } = useContext(DataContext);
  const Content = () => {
    return (
      <>
        <div className="container-fluid px-4">
          <Header user={user} />
          <div className="cards  flex-wrap d-flex justify-content-around">
            {cards.map((item) => {
              return (
                <Card
                  Created_date={item.Created_date}
                  customer_motion_service={item.customer_motion_service}
                  customer_board_letters={item.customer_board_letters}
                  customer_board_number={item.customer_board_number}
                  customer_VIN={item.customer_VIN}
                  customer_type={item.customer_type}
                  customer_factory={item.customer_factory}
                  user={user}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {user.type === "الفني" || user.type === "المشرف" ? (
        <>
          <div className="d-flex wrapper flex-row-reverse">
            <Sidebar user={user} /> <Content />
          </div>
        </>
      ) : (
        <Error_Page kind={400} />
      )}
    </>
  );
}

export default Cards;

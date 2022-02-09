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
                  Created_date={"2021/2/2"}
                  customer_motion_service={item.invoices_customer_service}
                  customer_board_letters={item.invoices_customer_board_letters}
                  customer_board_number={item.invoices_customer_number}
                  customer_VIN={item.invoices_customer_VIN}
                  customer_type={item.invoices_customer_factor}
                  customer_factory={item.invoices_customer_factory}
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

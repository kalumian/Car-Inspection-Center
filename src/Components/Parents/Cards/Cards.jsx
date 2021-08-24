import Error_Page from "../Error_Page/Error_Page";

function Cards({ user }) {
  const Content = () => {
    return <div className="cards">الفواتير</div>;
  };
  return <>{user === "الفني" ? <Content /> : <Error_Page kind={400} />}</>;
}

export default Cards;

function Sidebar_button({ setStateSide , stateSide}) {
  return (
    <div className="button_sidebar" onClick={() => setStateSide(!stateSide)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Sidebar_button;

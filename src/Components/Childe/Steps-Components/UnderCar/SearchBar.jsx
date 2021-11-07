function SearchBar({ title, setSearch }) {
  return (
    <div className="input-group mt-4 mb-4 search-bar align-self-center">
      <span className="input-group-text" id="basic-addon1">
        <i className="fas fa-search"></i>
      </span>
      <input
        type="text"
        className="form-control text-start"
        placeholder={`بحث في قسم ${title}`}
        aria-describedby="basic-addon1"
        onChange={({ target }) => setSearch(target.value)}
      />
    </div>
  );
}

export default SearchBar;

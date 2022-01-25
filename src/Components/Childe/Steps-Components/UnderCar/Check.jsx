function Check({ name, key, section, handleCheck}) {
  return (
    <div className="form-check border-top border-bottom text-end" key={key}>
      <input
        className="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
        value={name}
        onChange={handleCheck}
        section={section}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {name}
      </label>
    </div>
  );
}

export default Check;

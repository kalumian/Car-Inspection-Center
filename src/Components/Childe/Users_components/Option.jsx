function Option({ item }) {
  return <option key={item.id} value={item.identity}>{item.name}</option>;
}

export default Option;

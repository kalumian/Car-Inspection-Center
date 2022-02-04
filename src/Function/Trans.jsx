// import Function
import { useHistory } from "react-router-dom";
import { DefaultLinks } from "./UsersControl";

export default function Trans(user) {
  const history = useHistory();
  history.push(DefaultLinks(user));
  return <></>;
}

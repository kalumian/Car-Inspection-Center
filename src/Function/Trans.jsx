// import Function
import { useHistory } from "react-router-dom";
import { GetUser } from "./Generel";
import { DefaultLinks } from "./UsersControl";

export default function Trans() {
  const user = GetUser();
  const history = useHistory();
  history.push(DefaultLinks(user));
  return <></>;
}

import { Link } from "react-router-dom";
import { LiMenu } from "../Header.styles";
const ItemMenu = () => {
  const token = localStorage.getItem("key");
  return (
    <>
      {token ? (
        <>
          <Link to="/">
            <LiMenu>Home</LiMenu>
          </Link>
          <Link to="/users">
            <LiMenu>Users</LiMenu>
          </Link>
          <Link to="/address">
            <LiMenu>Address</LiMenu>
          </Link>
        </>
      ) : (
        <LiMenu>
          <Link to="/login">Login </Link>
        </LiMenu>
      )}
    </>
  );
};

export default ItemMenu;

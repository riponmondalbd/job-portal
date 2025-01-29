import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-small.png";
import AuthContext from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successful sign out");
      })
      .catch((error) => console.error(error.message));
  };

  // nav styles
  const navStyle = ({ isActive }) => ({
    color: isActive ? "blue" : "",
  });

  const links = (
    <>
      <li>
        <NavLink to={"/"} style={navStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/login"} style={navStyle}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"} style={navStyle}>
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to={"/"}>
          <img className="w-12" src={logo} alt="logo" />{" "}
          <h3 className="text-3xl">Job Portal</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>
              <button className="btn">Sign In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

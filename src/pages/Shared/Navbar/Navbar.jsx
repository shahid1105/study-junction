import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import photo from "../../../../public/profile-3.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li className="font-bold active:!container: bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-tr-3xl">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold active:!container: bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-tr-3xl">
        <Link to="/">Classes</Link>
      </li>
    </>
  );

  //   fixed z-10 bg-opacity-20
  return (
    <div>
      <div className="navbar fixed z-10   bg-opacity-60 max-w-screen-xl text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img className="h-[50px] rounded-full" src={""} alt="" />
            <a className="btn btn-ghost normal-case text-xl italic hidden md:block lg:block">
              Study Junction
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end pr-4">
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn btn-active btn-ghost btn-sm"
              >
                Log Out
              </button>
              <div className="avatar">
                <div className="w-10 ms-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL || photo} />
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-active btn-ghost">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

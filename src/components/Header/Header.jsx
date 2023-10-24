import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Login/Provider/AuthProvider";
import moon1 from "../../assets/night-mode.png"
import moon2 from "../../assets/night.png"

// eslint-disable-next-line no-unused-vars
const Header = ({darkMode, handleDarkMode}) => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(() => {

    })
    .catch(() => {

    });
  }
  return (
    <header className="bg-gradient-to-r from-[rgba(126,144,254,0.05)] to-[rgba(152,115,255,0.05)]">
      <div className="container">
        <nav className="navbar py-4">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 !text-base"
              >
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/addProduct'}>AddProduct</NavLink></li>
                <li><NavLink to={'/addCart'}>Add cart</NavLink></li>
                <li><NavLink to={'/myCart'}>My Cart</NavLink></li>
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/register'}>Register</NavLink></li>
              </ul>
            </div>
            <a className="text-xl sm:text-2xl font-medium">Gadget Gear</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 !text-base">
              <li><NavLink to={'/'}>Home</NavLink></li>
              <li><NavLink to={'/addProduct'}>Add Products</NavLink></li>
              <li><NavLink to={'/myCart'}>My Cart</NavLink></li>
              <li><NavLink to={'/login'}>Login</NavLink></li>
              <li><NavLink to={'/register'}>Register</NavLink></li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="mr-3" onClick={handleDarkMode}>
              {
                darkMode?
                <>
                  <img className="w-6 h-6" src={moon1} alt="" />
                </>
                :
                <>
                  <img className="w-6 h-6" src={moon2} alt="" />
                </>
              }
            </button>
            {
              user ?
                <div>
                  <div className="flex justify-center items-center">
                    <h4 className="bg-black text-white px-5 py-1 rounded-full">{user.displayName}</h4>
                    <img className="rounded-full w-10 h-10" src={user.photoURL} alt="" />
                    <button onClick={handleLogOut} className="bg-black text-white px-5 py-1 rounded-full">Log Out</button>
                  </div>
                </div>
                :
                <div>
                  <div className="">
                    <Link to="/logIn"><button className="bg-black text-white px-5 py-1 rounded-full">Log In</button></Link>
                  </div>
                </div>
            }
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

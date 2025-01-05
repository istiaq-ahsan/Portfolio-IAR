import { Link, NavLink } from "react-router-dom";
import logo from "/circle-iar-logo.png";

const Navbar = () => {
  const menuItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-semibold" : "text-white"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-semibold" : "text-white"
        }
      >
        About Me
      </NavLink>
      <NavLink
        to="/skill"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-semibold" : "text-white"
        }
      >
        Skills
      </NavLink>
      <NavLink
        to="/education"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-semibold" : "text-white"
        }
      >
        Education
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-yellow-500 font-semibold" : "text-white"
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-slate-800 text-white fixed top-0 z-50 md:px-5">
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
              className="menu menu-sm dropdown-content bg-slate-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <div className="bg-base-300 rounded-full">
            <img
              className="w-10 h-10 md:w-12 md:h-12 rounded-full p-1"
              src={logo}
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-10">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="https://docs.google.com/document/d/1Sux1_kZkNI7qzKzDog0qiZCkeL_uviTabBoo4M9hWa0/edit?usp=drive_link"
            className="btn"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

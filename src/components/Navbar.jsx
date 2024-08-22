import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <div className="flex flex-col lg:flex-row text-sm lg:gap-10 ">
      <li className="hover:text-white">
        <NavLink to="/">HOME</NavLink>
      </li>
      <li className="hover:text-white">
        <NavLink to="/allTouristsspot">about us</NavLink>
      </li>
      <li className="hover:text-white">
        <NavLink to="/addTouristsspot">treatment </NavLink>
      </li>
      <li className="hover:text-white">
        <NavLink to="/myList">doctors</NavLink>
      </li>
      <li className="hover:text-white">
        <NavLink to="/aboutUs">testimonials</NavLink>
      </li>
      <li className="hover:text-white">
        <NavLink to="/contact">packages </NavLink>
      </li>
      <li>
        <NavLink to="/contact">contact us </NavLink>
      </li>
      <li className="hover:text-white">
        <NavLink to="/contact">blog </NavLink>
      </li>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-zinc-800 text-zinc-300 uppercase font-semibold font-sans">
        <div className="navbar-start  lg:hidden">
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
              className=" menu-sm dropdown-content  bg-zinc-800 rounded-box z-[1] mt-1 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex mx-auto h-6">
          <ul className="menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

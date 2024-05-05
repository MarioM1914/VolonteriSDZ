import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import ToggleSwitch from "./ToggleSwitch";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
      <nav
        className="max-w-[85rem] w-full mx-auto flex flex-wrap basis-full items-center justify-between"
      >
        <Link to="/" className="sm:order-1 flex-none text-xl font-semibold">
          <img src="/logo.png" alt="Logo" className="w-20 h-20" />
        </Link>
        <div className="sm:order-3 flex items-center gap-x-2">
          <button
            type="button"
            className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-collapse="#navbar-alignment"
            aria-controls="navbar-alignment"
            onClick={toggleSidebar}
            aria-label="Toggle navigation"
          >
            <svg
              className="hs-collapse-open:hidden flex-shrink-0 size-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block hidden flex-shrink-0 size-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <div className="flex items-center">
            <ToggleSwitch />
          </div>
        </div>
        <div
          id="navbar-alignment"
          className={`hs-collapse ${
            isOpen ? "block" : "hidden"
          } overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <NavLink
              to="/"
              exact
              activeClassName="text-blue-700"
              className="font-medium text-gray-700 hover:text-gray-400"
            >
              Početna
            </NavLink>
            <NavLink
              to="/aktivnosti"
              activeClassName="text-blue-700"
              className="font-medium text-gray-700 hover:text-gray-400"
            >
              Aktivnosti
            </NavLink>
            <NavLink
              to="/volonteri"
              activeClassName="text-blue-700"
              className="font-medium text-gray-700 hover:text-gray-400"
            >
              Volonteri
            </NavLink>
            <NavLink
              to="/udruge"
              activeClassName="text-blue-700"
              className="font-medium text-gray-700 hover:text-gray-400"
            >
              Udruge
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

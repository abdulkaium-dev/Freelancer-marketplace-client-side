import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import ThemeToggle from "./ThemeToggle";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { logOutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success("Logout Success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Use the typewriter hook for the brand text
  const [text] = useTypewriter({
    words: ["Freelance Task Marketplace"],
    loop: 0, // infinite loop, or set a number
    delaySpeed: 2000,
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  return (
    <nav className="bg-gradient-to-br from-green-50 to-blue-100 shadow-md mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo or Brand with Typewriter */}
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600 whitespace-nowrap">
            {text}
            <Cursor cursorStyle="|" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/add-task"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
              }
            >
              Add Task
            </NavLink>

            <NavLink
              to="/browse-tasks"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
              }
            >
              Browse Tasks
            </NavLink>
            <NavLink
              to="/my-posted-tasks"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
              }
            >
              My Posted Tasks
            </NavLink>

            <ThemeToggle />

            {/* If user is logged in, show avatar with tooltip and Logout button */}
            {user ? (
              <>
                <div
                  title={user.displayName || "User"}
                  className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-indigo-600"
                >
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-4 py-1.5 rounded hover:bg-blue-600"
              >
                Login/Signup
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/add-task"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
              }
            >
              Add Task
            </NavLink>

            <NavLink
              to="/browse-tasks"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
              }
            >
              Browse Tasks
            </NavLink>
            <NavLink
              to="/my-posted-tasks"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"
              }
            >
              My Posted Tasks
            </NavLink>

               <ThemeToggle />

            {/* Mobile Logout / Login */}
            {user ? (
              <>
                <div
                  title={user.displayName || "User"}
                  className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-indigo-600 mb-2"
                >
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-4 py-1.5 rounded hover:bg-blue-600"
              >
                Login/Signup
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}









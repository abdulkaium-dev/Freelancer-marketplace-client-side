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
        console.error(error);
      });
  };

  const [text] = useTypewriter({
    words: ["Freelance Marketplace"],
    loop: 0,
    delaySpeed: 2000,
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Add Task", path: "/add-task" },
    { name: "Browse Tasks", path: "/browse-tasks" },
    { name: "My Posted Tasks", path: "/my-posted-tasks" },
  ];

  const renderLinks = (isMobile = false) =>
    menuItems.map(({ name, path }) => (
      <NavLink
        key={name}
        to={path}
        onClick={() => isMobile && setIsOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "text-[#10B981] font-semibold"
            : "text-[#111827] hover:text-[#10B981]"
        }
      >
        {name}
      </NavLink>
    ));

  return (
    <nav className="bg-[#F9FAFB] shadow-md mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex-shrink-0 text-2xl font-bold text-[#111827] whitespace-nowrap">
            {text}
            <Cursor cursorStyle="|" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {renderLinks()}
            <ThemeToggle />

            {user ? (
              <div className="flex items-center gap-4">
                <div
                  title={user.displayName || "User"}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#10B981]"
                >
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-[#10B981] text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/login"
                  className="bg-[#10B981] text-white px-3 py-1.5 rounded hover:bg-green-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-[#111827] text-white px-3 py-1.5 rounded hover:bg-gray-800"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#111827] hover:text-[#10B981] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#10B981]"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-2">
            {renderLinks(true)}
            <ThemeToggle />

            {user ? (
              <>
                <div
                  title={user.displayName || "User"}
                  className="w-10 h-10 mt-3 rounded-full overflow-hidden border-2 border-[#10B981]"
                >
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-[#10B981] text-white px-3 py-1 mt-2 rounded hover:bg-green-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-2 mt-4">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#10B981] text-white px-3 py-1.5 rounded hover:bg-green-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#111827] text-white px-3 py-1.5 rounded hover:bg-gray-800"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

import React, { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between  h-16 items-center">
          {/* Logo or Brand */}
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
          Freelance Task Marketplace
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 ">
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

        
          <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-600"
          }
        >
       Login/Signup
        </NavLink>
         
    
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

        
          <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-600"
          }
        >
       Login/Signup
        </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}



        //  <NavLink
        //   to="/"
        //   className={({ isActive }) =>
        //     isActive ? "text-blue-600 font-semibold" : "text-gray-600"
        //   }
        // >
        //   Home
        // </NavLink>







// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { auth } from "../Firebase/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign Out Error:", error.message);
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Trending", path: "/trending" },
    { name: "About Us", path: "/aboutus" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-30 w-full max-w-5xl mx-auto bg-white/80 shadow backdrop-blur-lg md:top-6 md:rounded-3xl">
      <div className="px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-blue-800 text-3xl">Techie</span>Talks
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-5">
            <ul className="flex gap-5">
              {navItems.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 ${
                        isActive ? "bg-gray-100 text-gray-900" : "text-gray-900 hover:bg-gray-100"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}

              {/* Profile Link for Logged-in Users */}
              {user && (
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 ${
                        isActive ? "bg-gray-100 text-gray-900" : "text-gray-900 hover:bg-gray-100"
                      }`
                    }
                  >
                    Profile
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>

          {/* Desktop Auth and Profile */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative group">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="Profile"
                  className="h-8 w-8 rounded-full border border-gray-300 cursor-pointer"
                />
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition duration-200">
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 transition hover:bg-gray-50"
                >
                  Sign up
                </Link>
                <Link
                  to="/register"
                  className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-3 pb-4">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className="block w-full text-center py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </NavLink>
            ))}

            {/* Profile Link for Mobile */}
            {user && (
              <NavLink
                to="/profile"
                className="block w-full text-center py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </NavLink>
            )}

            {/* Authentication Links */}
            {user ? (
              <>
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="Profile"
                  className="h-10 w-10 rounded-full border border-gray-300"
                />
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  className="block w-full text-center py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-400"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="block w-full text-center py-2 text-sm font-semibold text-gray-900 bg-white ring-1 ring-gray-300 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Link>
                <Link
                  to="/register"
                  className="block w-full text-center py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">Newz</Link>
        <div className="space-x-4">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, label }) => (
  <Link to={to} className="text-white hover:text-gray-300">{label}</Link>
);

export default Navbar;

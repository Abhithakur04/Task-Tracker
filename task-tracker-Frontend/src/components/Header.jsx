import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <h1 className="text-2xl font-bold mb-2">Task Tracker</h1>
    <nav className="space-x-4">
      <Link to="/projects" className="hover:underline">Projects</Link>
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/signup" className="hover:underline">Signup</Link>
    </nav>
  </header>
);

export default Header;

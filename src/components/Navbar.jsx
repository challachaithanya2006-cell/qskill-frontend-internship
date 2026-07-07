import { NavLink } from "react-router-dom";
import { FaCode } from "react-icons/fa";

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-cyan-400 font-semibold"
      : "text-white hover:text-cyan-400 transition";

  return (
    <nav className="bg-slate-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="flex items-center gap-3">
          <FaCode className="text-cyan-400 text-2xl" />
          <h1 className="text-xl font-bold text-cyan-400">
            QSkill Project
          </h1>
        </div>

        <div className="flex gap-6">

          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/translator" className={linkStyle}>
            Translator
          </NavLink>

          <NavLink to="/generator" className={linkStyle}>
            Generator
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

        </div>

      </div>
    </nav>
  );
}
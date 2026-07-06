import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-cyan-400">
          QSkill
        </h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-cyan-400">Home</Link>
          <Link to="/translator" className="hover:text-cyan-400">Translator</Link>
          <Link to="/generator" className="hover:text-cyan-400">Generator</Link>
          <Link to="/about" className="hover:text-cyan-400">About</Link>
        </div>
      </div>
    </nav>
  );
}
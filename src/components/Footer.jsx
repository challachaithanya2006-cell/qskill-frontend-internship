import { FaGithub, FaReact, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h2 className="text-xl font-bold text-cyan-400">
            QSkill Front-End Project
          </h2>
          <p className="text-sm mt-2">
            Built using React, Tailwind CSS, React Router and RapidAPI.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xl">
          <FaReact className="text-cyan-400" />
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME/qskill-frontend-internship"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaGithub />
          </a>
        </div>

      </div>

      <div className="border-t border-slate-700 text-center py-4 text-sm">
        Made with <FaHeart className="inline text-red-500" /> by Challa Naga Chaitanya Sai
      </div>
    </footer>
  );
}
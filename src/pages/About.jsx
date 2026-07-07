import { FaGithub, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiAxios } from "react-icons/si";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-slate-800 rounded-2xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-6">
          About This Project
        </h1>

        <p className="text-gray-300 text-lg leading-8 text-center">
          This project was developed as part of the <strong>QSkill Front-End Development Internship</strong>.
          It demonstrates modern React development with API integration, routing, reusable components,
          and responsive UI design.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-slate-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Technologies Used
            </h2>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaReact className="text-cyan-400" />
                React.js
              </li>

              <li className="flex items-center gap-3">
                <SiTailwindcss className="text-sky-400" />
                Tailwind CSS
              </li>

              <li className="flex items-center gap-3">
                <SiAxios className="text-yellow-400" />
                Axios
              </li>

              <li>🌍 Microsoft Translator API (RapidAPI)</li>
              <li>🚀 React Router</li>
              <li>⚡ Vite</li>
            </ul>
          </div>

          <div className="bg-slate-700 rounded-xl p-6">

            <h2 className="text-2xl font-semibold mb-4">
              Developer
            </h2>

            <p className="mb-3">
              <strong>Name:</strong><br />
              Challa Naga Chaitanya Sai
            </p>

            <p className="mb-3">
              <strong>Internship:</strong><br />
              QSkill Front-End Development Internship
            </p>

            <p>
              <strong>Project:</strong><br />
              Text Translator & Random String Generator
            </p>

          </div>

        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/challachaithanya2006-cell/qskill-frontend-internship"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            <FaGithub className="text-xl" />
            View Source Code
          </a>
        </div>

      </div>
    </div>
  );
}
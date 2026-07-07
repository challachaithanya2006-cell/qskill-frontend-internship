import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">

        <h1 className="text-6xl font-extrabold text-cyan-400 mb-6">
          QSkill Front-End Internship
        </h1>

        <p className="text-gray-300 text-xl max-w-3xl">
          A modern React application built using React, Tailwind CSS,
          React Router, Axios, and RapidAPI.
        </p>

        <div className="flex gap-4 mt-10">

          <Link
            to="/translator"
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Open Translator
          </Link>

          <Link
            to="/generator"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Open Generator
          </Link>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              🌍 Text Translator
            </h3>

            <p className="text-gray-300">
              Translate text into multiple languages using the Microsoft
              Translator API powered by RapidAPI.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              🔐 Random String Generator
            </h3>

            <p className="text-gray-300">
              Generate secure random strings with custom length and
              character options.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-400">
        Developed by Challa Naga Chaitanya Sai ❤️
      </footer>

    </div>
  );
}
import { useState } from "react";

export default function Translator() {
  const [text, setText] = useState("");
  const [fromLanguage, setFromLanguage] = useState("en");
  const [toLanguage, setToLanguage] = useState("es");

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">
        Text Translator
      </h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <select
          value={fromLanguage}
          onChange={(e) => setFromLanguage(e.target.value)}
          className="bg-slate-800 text-white p-3 rounded-lg"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="te">Telugu</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>

        <select
          value={toLanguage}
          onChange={(e) => setToLanguage(e.target.value)}
          className="bg-slate-800 text-white p-3 rounded-lg"
        >
          <option value="es">Spanish</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="te">Telugu</option>
          <option value="fr">French</option>
        </select>
      </div>

      <textarea
        className="w-full h-40 p-4 rounded-lg bg-slate-800 text-white"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg">
        Translate
      </button>
    </div>
  );
}
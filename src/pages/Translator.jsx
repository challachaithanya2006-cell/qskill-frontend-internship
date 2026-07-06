import { useState } from "react";

export default function Translator() {
  const [text, setText] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">
        Text Translator
      </h1>

      <textarea
        className="w-full h-40 p-4 rounded-lg bg-slate-800 text-white"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="mt-4 bg-cyan-500 px-6 py-3 rounded-lg">
        Translate
      </button>
    </div>
  );
}
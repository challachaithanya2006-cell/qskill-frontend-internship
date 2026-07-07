import { useState } from "react";
import { translateText } from "../services/translator";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const [fromLanguage, setFromLanguage] = useState("en");
  const [toLanguage, setToLanguage] = useState("es");

  const handleTranslate = async () => {
    if (!text.trim()) return;

    setLoading(true);

    try {
      const data = await translateText(text, fromLanguage, toLanguage);

      setTranslated(
        data?.[0]?.translations?.[0]?.text || "Translation failed."
      );
    } catch (error) {
      console.error(error);
      setTranslated("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const swapLanguages = () => {
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
  };

  const copyTranslation = () => {
    if (!translated) return;
    navigator.clipboard.writeText(translated);
    alert("Copied!");
  };

  const clearAll = () => {
    setText("");
    setTranslated("");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 text-white">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
        🌍 Text Translator
      </h1>

      <div className="grid grid-cols-2 gap-4 mb-4">

        <select
          value={fromLanguage}
          onChange={(e) => setFromLanguage(e.target.value)}
          className="bg-slate-800 p-3 rounded-lg"
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
          className="bg-slate-800 p-3 rounded-lg"
        >
          <option value="es">Spanish</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="te">Telugu</option>
          <option value="fr">French</option>
        </select>

      </div>

      <button
        onClick={swapLanguages}
        className="mb-4 bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg"
      >
        🔄 Swap Languages
      </button>

      <textarea
        className="w-full h-40 p-4 rounded-lg bg-slate-800"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex gap-4 mt-4">

        <button
          onClick={handleTranslate}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg"
        >
          {loading ? "Translating..." : "Translate"}
        </button>

        <button
          onClick={copyTranslation}
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg"
        >
          Copy
        </button>

        <button
          onClick={clearAll}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg"
        >
          Clear
        </button>

      </div>

      <div className="mt-8 bg-slate-800 rounded-lg p-6 min-h-32">
        <h2 className="text-xl font-semibold mb-3">Translated Text</h2>

        <p className="break-words">
          {translated || "Your translation will appear here."}
        </p>
      </div>

    </div>
  );
}
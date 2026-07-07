import { useState, useCallback, useEffect } from "react";

export default function Generator() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [generatedString, setGeneratedString] = useState("");

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const nums = "0123456789";
  const sym = "!@#$%^&*()_+{}[]<>?/|";

  const generateString = useCallback(() => {
    let chars = "";

    if (uppercase) chars += upper;
    if (lowercase) chars += lower;
    if (numbers) chars += nums;
    if (symbols) chars += sym;

    if (!chars) {
      setGeneratedString("Please select at least one option.");
      return;
    }

    let result = "";

    for (let i = 0; i < Number(length); i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }

    setGeneratedString(result);
  }, [length, uppercase, lowercase, numbers, symbols]);

  useEffect(() => {
    generateString();
  }, [generateString]);

  const copyToClipboard = () => {
    if (!generatedString) return;

    navigator.clipboard.writeText(generatedString);
    alert("Copied to Clipboard!");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-8">
          Random String Generator
        </h1>

        <div className="mb-8">
          <label className="block text-lg font-semibold mb-3">
            String Length: <span className="text-cyan-400">{length}</span>
          </label>

          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">

          <label className="flex items-center gap-3 text-lg cursor-pointer">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
              className="w-5 h-5 accent-cyan-500"
            />
            Uppercase
          </label>

          <label className="flex items-center gap-3 text-lg cursor-pointer">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={() => setLowercase(!lowercase)}
              className="w-5 h-5 accent-cyan-500"
            />
            Lowercase
          </label>

          <label className="flex items-center gap-3 text-lg cursor-pointer">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
              className="w-5 h-5 accent-cyan-500"
            />
            Numbers
          </label>

          <label className="flex items-center gap-3 text-lg cursor-pointer">
            <input
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
              className="w-5 h-5 accent-cyan-500"
            />
            Symbols
          </label>

        </div>

        <div className="bg-slate-700 rounded-xl p-5 text-center text-xl font-mono break-all mb-8 border border-slate-600">
          {generatedString}
        </div>

        <div className="flex gap-4">

          <button
            onClick={generateString}
            className="flex-1 bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 py-3 rounded-xl font-bold text-lg"
          >
            Generate
          </button>

          <button
            onClick={copyToClipboard}
            className="flex-1 bg-green-500 hover:bg-green-600 transition-all duration-300 py-3 rounded-xl font-bold text-lg"
          >
            Copy
          </button>

        </div>

      </div>
    </div>
  );
}
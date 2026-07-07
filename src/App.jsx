import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Translator from "./pages/Translator";
import Generator from "./pages/Generator";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/translator" element={<Translator />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
// Routes definitions for URL path
import "./App.css";
import { Route, Routes } from "react-router";
import Main from "./pages/Main.jsx";
import Currencies from "./pages/Currencies.jsx";
import Price from "./pages/Price.jsx";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </div>
  );
}
// Routes definitions for URL path
import "./App.css";
import { Route, Routes } from "react-router";
import Main from "./pages/Main.jsx";
import Currencies from "./pages/Currencies.jsx";
import Price from "./pages/Price.jsx";
import Nav from "./components/Nav.jsx";

export default function App() {
  return (
    <div className="App">

       {/* The navigation appears on every page */}
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}
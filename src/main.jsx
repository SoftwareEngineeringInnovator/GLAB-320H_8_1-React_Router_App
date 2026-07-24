import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter as Router } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* App and its future pages will have access to routing features. */}
    <Router>
      <App />
    </Router>
  </StrictMode>
);

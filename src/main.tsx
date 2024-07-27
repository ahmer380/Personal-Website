import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";

const App = () => (
  <div id="pages">
    <Navbar />
    <Home />
    <Portfolio />
    <About />
    <Contact />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

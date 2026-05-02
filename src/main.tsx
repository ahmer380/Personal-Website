import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PDFViewer from "./pages/PDFViewer";
import Projects from "./pages/Projects";

const App = () => (
  <div id="pages">
    <Navbar />
    <Home />
    <Projects />
    <About />
    <Contact />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="pdf/:pdfName" element={<PDFViewer />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

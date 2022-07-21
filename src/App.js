import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Entertainment from "./pages/Entertainment";
import Vlogs from "./pages/Vlogs";
import Career from "./pages/Career";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/About" element={<About />} />

        <Route path="/Contact" element={<Contact />} />

        <Route path="/Projects" element={<Projects />} />

        <Route path="/Entertainment" element={<Entertainment />} />

        <Route path="/Vlogs" element={<Vlogs />} />

        <Route path="/Career" element={<Career />} />
      </Routes>
    </Router>
  );
}

export default App;

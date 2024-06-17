import "./styles.css";
import Card from "./Components/Card";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <div className="App">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Card name="Mohameth" city="West Haven" job="Sky Diver" />
      <Card name="Terry" city="Flushing" job="Student" />
      <Card name="Charlie" city="Queens" job="Lazy" />
    </div>
  );
}

import "./styles.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

export default function App() {
  return (
    <div className="App">
      <div className="Title">
        <div>
          <h1> Interactive Map of Connecticut</h1>
        </div>
        <div className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login In</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

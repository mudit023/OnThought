import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import "./App.css";
function App() {
  return (
    <div className="bg-[#090909] relative">
      <Routes>
        <Route path="/home" element=<Home /> />
        <Route path="/" element=<LandingPage /> />
      </Routes>
    </div>
  );
}

export default App;

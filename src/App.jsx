import { Route, Routes } from "react-router-dom";
import "./main.scss";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

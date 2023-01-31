import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Error from "./pages/Error/index"
import './App.css';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Error />} />
  </Routes>
  );
}

export default App;

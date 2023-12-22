import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Race from "./pages/Race";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/race" element={<Race />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

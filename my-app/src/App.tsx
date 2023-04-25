import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import CopyTrade from "./components/CopyTrade/CopyTrade";

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/copyTrade" element={<CopyTrade />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Optional pages (only if you have them, otherwise ignore)
import Monitor from "./pages/Monitor";
import Alerts from "./pages/Alerts";
import Symptoms from "./pages/Symptoms";
import Report from "./pages/Report";
import Reminders from "./pages/Reminders";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Optional Routes (safe fallback) */}
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/report" element={<Report />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/profile" element={<Profile />} />

        {/* Fallback Route (VERY IMPORTANT) */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
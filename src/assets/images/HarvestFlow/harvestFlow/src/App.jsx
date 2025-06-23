// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransactions";
import Report from "./pages/Report";
import Navbar from "./components/Navbar";
import DebtPage from "./pages/DebtPage";
import IncomeSources from "./pages/IncomeSources";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-50 via-white to-cyan-50 text-gray-800">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddTransaction />} />
            <Route path="/report" element={<Report />} />
            <Route path="/debt" element={<DebtPage />} />
            <Route path="/income" element={<IncomeSources />} />
          </Routes>
        </main>

        {/* Footer (optional) */}
        <footer className="text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} MoneyTrail. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/Faq";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThankYou from "./pages/ThankYou"; 
import Pricing from "./pages/Pricing"; 
import SocialWidget from './pages/SocialWidget';

function App() {
  return (
    <Router>
      <div className="font-[UnifrakturCook] min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-red-900">
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Optional texture overlay for extra depth */}
          <div className="absolute inset-0 bg-[url('/texture.png')] bg-repeat opacity-10 pointer-events-none z-0" />
          <div className="relative z-10">
            <Navbar />
             <SocialWidget /> {/* ✅ Add it here */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="/about" element={<About />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

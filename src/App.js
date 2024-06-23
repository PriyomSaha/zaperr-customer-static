import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/terms&condition" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

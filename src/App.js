import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

// Lazy loading components
const TermsAndConditions = lazy(() =>
  import("./Components/TermsAndConditions")
);
const PrivacyPolicy = lazy(() => import("./Components/PrivacyPolicy"));

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/terms&condition" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;

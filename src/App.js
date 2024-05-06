import LandingPage from "./Pages/Landing";
import Landingpage2 from "./Pages/LandingPage2";
import React from "react";
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/"   element= {<LandingPage/>} />
      <Route path="/2"   element= {<Landingpage2/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

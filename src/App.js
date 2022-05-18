import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FlightSchedule from "./components/FlightSchedule";
import Orders from "./components/Orders";
import FlightDetails from "./components/FlightDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FlightSchedule />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/flightdetails" element={<FlightDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

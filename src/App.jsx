/** @format */

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Nav from "./components/Nav";
import "./style/App.css";

const App = function () {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <AppRouter />
      </Router>
    </div>
  );
};

export default App;

/** @format */

import "./style/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;

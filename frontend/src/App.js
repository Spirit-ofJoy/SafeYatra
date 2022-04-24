import "./App.scss";
import HomePage from "./Pages/HomePage";
import Details from "./Pages/Details";
import Landing from "./Pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/form" element={<Details />} />
        <Route exact path="/Landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;

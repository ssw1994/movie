import "./App.css";
import Login from "./components/user/Login/Login";
import Movies from "./components/movies/Movies/Movies";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Movies />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

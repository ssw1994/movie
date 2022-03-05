import "./App.css";
import Login from "./components/user/Login/Login";
import Movies from "./components/movies/Movies/Movies";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Link to="/login">Login</Link>
      <Link to="/movies">Movies</Link>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

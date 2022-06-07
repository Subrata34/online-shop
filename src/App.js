
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<home />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

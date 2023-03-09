import { Routes, Route } from "react-router-dom";
import UsersLayout from "./elements/UsersLayout";
import Home from "./screens/Home";
import "./design/style.scss";
import "swiper/css";
import Login from "./screens/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UsersLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <Routes></Routes>
    </div>
  );
}

export default App;

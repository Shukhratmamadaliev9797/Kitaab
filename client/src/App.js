import { Routes, Route } from "react-router-dom";
import UsersLayout from "./elements/UsersLayout";
import Home from "./screens/Home";
import "./design/style.scss";
import "swiper/css";
import Login from "./screens/Login";
import UserNotLoginInRoute from "./elements/UserNotLoginInRoute";
import Register from "./screens/Register";
import ProfileLayout from "./elements/ProfileLayout";
import Profile from "./screens/Profile";
import MyListings from "./screens/MyListings";
import MyShoppingOrders from "./screens/MyShoppingOrders";
import UserLoginInRoute from "./elements/UserLoginInRoute";
import CreateListing from "./screens/CreateListing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UsersLayout />}>
          <Route index element={<Home />} />
          <Route element={<UserLoginInRoute />}>
            <Route path="create-listing" element={<CreateListing />} />
            <Route path="profile" element={<ProfileLayout />}>
              <Route index element={<Profile />} />
              <Route path="selling-orders" element={<MyListings />} />
              <Route path="shopping-orders" element={<MyShoppingOrders />} />
            </Route>
          </Route>

          <Route element={<UserNotLoginInRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
      <Routes></Routes>
    </div>
  );
}

export default App;

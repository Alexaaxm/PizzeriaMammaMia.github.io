import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import { UserContext } from "./providers/UserProvider";
import LoginForm from "./pages/LoginForm";

function App() {
  const { token } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <RegisterForm />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <LoginForm />}
        />
        <Route
          path="/admin"
          element={token ? <div>Admin</div> : <Navigate to="/login" />}
        />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

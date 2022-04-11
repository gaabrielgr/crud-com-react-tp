import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import AddressProvider from "./context/AddressContext";
import AuthProvider from "./context/AuthContext";
import UserProvider from "./context/UserContext";
import Address from "./pages/address/Address";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notfound/NotFound";
import Users from "./pages/users/Users";
function Routers() {
  const token = localStorage.getItem("key");

  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <AddressProvider>
            <Header />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/users" element={<Users />} />
              <Route path="/address" element={<Address />} />
            </Routes>
          </AddressProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Routers;

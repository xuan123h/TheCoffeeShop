import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";
import Show from "./pages/Show";
import { Routes, Route } from "react-router-dom";
import Promotion from "./pages/Promotion";
import Information from "./pages/Information";
import ProductFather from "./pages/ProductFather";
import ProductDetail from "./features/ProductDetail";
import Cart from "./pages/Cart";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<ProductFather />} />
        <Route path="/coffee/:id" element={<ProductDetail />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/show" element={<Show />} />
        <Route path="/information" element={<Information />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

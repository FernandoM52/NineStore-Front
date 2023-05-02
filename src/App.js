import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import HomePage from "./pages/HomePage";
import Listagem from "./pages/Listagem/Listagem.js";
import CartShopPage from "./pages/CartShopPage";
import ProductsPage from "./pages/ProductsPage";
import PurchasePage from "./pages/PurchasePage";
import UserProvider from "./context/userContext";
import Home from "./pages/Home/HomePage.js"

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/produto/:tipo" element={<ProductsPage />} />
          <Route path="/carrinho" element={<CartShopPage />} />
          <Route path="/pedido-finalizado" element={<PurchasePage />} />
          <Route path="/busca" element={<Listagem />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

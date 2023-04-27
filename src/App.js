import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import CartShopPage from "./pages/CartShopPage";
import ProductsPage from "./pages/ProductsPage";
import PurchasePage from "./pages/PurchasePage";
import UserProvider from "./context/userContext";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/produto/:tipo" element={<ProductsPage />} />
          <Route path="/carrinho" element={<CartShopPage />} />
          <Route path="/pedido-finalizado" element={<PurchasePage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};
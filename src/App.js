import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import Listagem from "./pages/Listagem/Listagem";
import CartShopPage from "./pages/CartShopPage";
import ProductsPage from "./pages/ProductsPage";
import PurchasePage from "./pages/CompletedPurchase/CompletedPurchasePage";
import UserProvider from "./context/userContext";
import Home from "./pages/Home/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/produto/:tipo" element={<ProductsPage />} />
          <Route path="/carrinho" element={<CartShopPage />} />
          <Route path="/compra-finalizada" element={<PurchasePage />} />
          <Route path="/busca" element={<Listagem />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

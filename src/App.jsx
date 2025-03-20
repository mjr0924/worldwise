import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayOut";

export default function App() {
  return <BrowserRouter>
    <Routes >
      <Route path="/" element={<HomePage />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="product" element={<Product />} />
      <Route path="app" element={<AppLayout />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>;
}

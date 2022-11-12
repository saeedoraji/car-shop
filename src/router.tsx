import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { App } from "./App";
import { ProductDetail } from "./components/pages/product-detail/productDetail";
import { Product } from "./components/pages/product/product";
import { ProductAppProvider } from "./context/state/context";

export const AppRouter: FC = () => {
  return (
    <ProductAppProvider>
      <Routes>
        <Route path="/*" element={<App />}>
          <Route index path="autos" element={<Product />} />
          <Route path="auto/:id" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/autos" replace />} />
        </Route>
      </Routes>
    </ProductAppProvider>
  );
};

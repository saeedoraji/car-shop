import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Product } from "./components/pages/product/product";
import { Layout } from "./components/templates/layout/layout";

export const App: FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

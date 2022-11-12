import { FC, ReactNode } from "react";
import { Header } from "./header";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="container w-full mx-auto">
      <Header />
      {children}
    </div>
  );
};

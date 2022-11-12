import { useContext, useReducer, createContext, FC } from "react";
import {
  initialState,
  IProductAction,
  IProductState,
  ProductReducer,
} from "../reducer/product.reducer";

const ContextState = createContext(
  [] as unknown as [IProductState, (action: IProductAction) => void]
);

const useProductApp = () => {
  const context = useContext(ContextState);
  if (!context) {
    throw new Error(`useProductApp must be used within a ProductAppProvider`);
  }
  return context;
};

const ProductAppProvider: FC<any> = (props) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  return <ContextState.Provider value={[state, dispatch]} {...props} />;
};

export { useProductApp, ProductAppProvider };

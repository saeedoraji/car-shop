import { PRODUCT_PAGE_LIMIT } from "../../config/product.config";
import { IProduct } from "../../services/productService/product.interface";
import { ProductActions } from "../action/product.action";

export interface IProductState {
  products: IProduct[];
  numberOfLoadedProducts: number;
  scrollActiveItem: number;
}

export interface IProductAction {
  type: ProductActions;
  payload: IProductState;
}

export const initialState: IProductState = {
  products: [],
  numberOfLoadedProducts: PRODUCT_PAGE_LIMIT,
  scrollActiveItem: 0,
};

export const ProductReducer = (
  state = initialState,
  action: IProductAction
) => {
  const { payload } = action;
  switch (action.type) {
    case ProductActions.SET_CACHE_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error();
  }
};

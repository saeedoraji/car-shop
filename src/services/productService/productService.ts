import { api } from "../api/api";
import { withTry } from "../utils/hos";
import { IProduct } from "./product.interface";

export const getProduct = async (): Promise<IProduct[]> => {
  const products = await withTry(api().get);
  if (products.data) {
    return products.data.getOffersV3Beta.records;
  }
  return [];
};

export const getOneProduct = async (
  id: string
): Promise<IProduct | undefined> => {
  const products = await withTry(api().get);
  if (products.data) {
    return (
      products.data.getOffersV3Beta.records.filter(
        (item: IProduct) => item.vehicleId === id
      )[0] ?? undefined
    );
  }
  return undefined;
};

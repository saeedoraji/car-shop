import { FC, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { parse } from "query-string";
import { IProduct } from "../../../services/productService/product.interface";
import { getProduct } from "../../../services/productService/productService";
import { Filter } from "../../ui/organisms/filter/filter";
import { TileContainer } from "../../ui/organisms/tileContainer/tileContainer";
import { useProductApp } from "../../../context/state/context";
import { ProductActions } from "../../../context/action/product.action";
import {
  PRODUCT_FIELD_CONFIG,
  PRODUCT_PAGE_LIMIT,
} from "../../../config/product.config";

export const Product: FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [searchParams] = useSearchParams();
  const [productState, setProductState] = useProductApp();

  const didMount = useRef(false);

  const getFilteredProducts = () => {
    const filterObject = parse(searchParams.toString());
    if (Object.keys(filterObject).length) {
      let products: IProduct[] = [...productList];
      for (let field in filterObject) {
        if (field.includes("to")) continue;
        const configField = PRODUCT_FIELD_CONFIG.filter(
          (item) => item.name === field
        )[0];

        if (configField && filterObject[field]) {
          if (configField.type === "number") {
            products = products.filter(
              (item) =>
                item[configField.name] >=
                  parseInt(filterObject[field]?.toString() ?? "0") &&
                item[configField.name] <=
                  parseInt(filterObject[field + "_to"]?.toString() ?? "0")
            );
          } else {
            products = products.filter(
              (item) => item[configField.name] === filterObject[field]
            );
          }
        }
      }

      return products;
    }

    return productList;
  };

  const visibleProducts = useMemo(() => {
    return getFilteredProducts();
  }, [productList, searchParams]);

  const getProductList = async () => {
    if (productState.products.length) {
      return setProductList(productState.products);
    }
    const products = await getProduct();
    setProductState({
      type: ProductActions.SET_CACHE_PRODUCT,
      payload: {
        products,
        numberOfLoadedProducts: PRODUCT_PAGE_LIMIT,
        scrollActiveItem: 0,
      },
    });
    setProductList(products);
  };

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      getProductList();
    }
  }, []);

  return (
    <div className="md:flex-row flex flex-col">
      <div className="lg:w-1/3 md:w-1/4 flex w-full">
        <Filter productList={visibleProducts} />
      </div>
      <div className="lg:w-2/3 md:w-3/4 flex w-full">
        {!!productList.length && (
          <TileContainer productList={visibleProducts} />
        )}
      </div>
    </div>
  );
};

import { FC, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { PRODUCT_PAGE_LIMIT } from "../../../../config/product.config";
import { ProductActions } from "../../../../context/action/product.action";
import { useProductApp } from "../../../../context/state/context";
import { IProduct } from "../../../../services/productService/product.interface";
import Typography from "../../atoms/typography/typography";
import { TypographyVariant } from "../../atoms/typography/typography.interface";
import { Tile } from "../../molecules/tile/tile";

export const TileContainer: FC<{ productList: IProduct[] }> = ({
  productList,
}) => {
  const filterEl = useRef<HTMLDivElement[]>([]);
  const [productState, dispatch] = useProductApp();

  const fetchData = () => {
    // EX: api delay call
    setTimeout(() => {
      dispatch({
        type: ProductActions.SET_CACHE_PRODUCT,
        payload: {
          ...productState,
          numberOfLoadedProducts:
            productState.numberOfLoadedProducts + PRODUCT_PAGE_LIMIT,
        },
      });
    }, 1000);
  };

  const restoreScrollPosition = (index: number) => {
    filterEl.current[index]?.scrollIntoView({
      block: "center",
    });
  };

  useEffect(() => {
    if (
      productState.numberOfLoadedProducts > PRODUCT_PAGE_LIMIT &&
      productState.scrollActiveItem
    ) {
      restoreScrollPosition(productState.scrollActiveItem);
    }
  }, []);
  return (
    <InfiniteScroll
      dataLength={productState.numberOfLoadedProducts} //This is important field to render the next data
      next={fetchData}
      hasMore={productState.numberOfLoadedProducts < productList.length}
      loader={
        <Typography variant={TypographyVariant.H5}>Loading...</Typography>
      }
      endMessage={
        <Typography variant={TypographyVariant.BODY1} className="text-center">
          You have seen it all
        </Typography>
      }
    >
      <div className="grid gap-6 grid-cols-1 p-5 sm:grid-cols-2 xl:grid-cols-3">
        {productList
          .slice(0, productState.numberOfLoadedProducts)
          .map((product, index) => (
            <div
              ref={(element) => {
                if (element) filterEl.current.push(element);
              }}
              key={product.vehicleId}
            >
              <Link
                to={`/auto/${product.vehicleId}`}
                state={index}
                className="h-full flex"
              >
                <Tile product={product} />
              </Link>
            </div>
          ))}
      </div>
    </InfiniteScroll>
  );
};

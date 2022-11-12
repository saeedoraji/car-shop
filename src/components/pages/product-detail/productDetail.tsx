import { FC, useEffect, useRef, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { ProductActions } from "../../../context/action/product.action";
import { useProductApp } from "../../../context/state/context";
import { IProduct } from "../../../services/productService/product.interface";
import { getOneProduct } from "../../../services/productService/productService";
import { Gallery } from "../../ui/molecules/gallery/gallery";
import { ProductData } from "../../ui/organisms/productData/productData";
export const ProductDetail: FC = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const didMount = useRef(false);
  const [productState, dispatch] = useProductApp();
  const [productData, setProductData] = useState<IProduct | undefined>();
  const id = params.id as string;
  const getProductData = async () => {
    let product: IProduct | undefined;
    if (productState.products.length) {
      product = productState.products.filter(
        (item) => item.vehicleId === id
      )[0];
    } else {
      product = await getOneProduct(id);
    }
    if (product) {
      setProductData(product);
    } else {
      // TODO: should be redirected to not found
      navigate("/");
    }
  };
  useEffect(() => {
    if (didMount.current) return;
    didMount.current = true;
    if (location.state) {
      dispatch({
        type: ProductActions.SET_CACHE_PRODUCT,
        payload: {
          ...productState,
          scrollActiveItem: location.state,
        },
      });
    }
    getProductData();
  }, []);

  if (!productData) {
    return <div>loading...</div>;
  }
  return (
    <div className="container p-5">
      <div className="flex flex-col md:flex-row">
        <div className="flex-2">
          <Gallery product={productData} />
        </div>
        <div className="flex pl-4">
          <ProductData product={productData} />
        </div>
      </div>
    </div>
  );
};

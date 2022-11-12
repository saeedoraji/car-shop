import { FC } from "react";
import { PRODUCT_FIELD_CONFIG } from "../../../../config/product.config";
import { IProduct } from "../../../../services/productService/product.interface";
import Typography from "../../atoms/typography/typography";
import { TypographyVariant } from "../../atoms/typography/typography.interface";

export const ProductData: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="w-full">
      {PRODUCT_FIELD_CONFIG.filter((item) => item.isDetail).map((item) => (
        <div className="flex" key={item.name}>
          <Typography
            variant={TypographyVariant.BODY1}
            className="mr-1 font-bold capitalize"
          >
            {item.name}:
          </Typography>
          <Typography variant={TypographyVariant.BODY1}>
            {product[item.name]}
          </Typography>
        </div>
      ))}
    </div>
  );
};

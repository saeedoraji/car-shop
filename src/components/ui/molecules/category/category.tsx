import { FC } from "react";
import { ProductCategory } from "../../../../services/productService/product.interface";
import { FilterBoxType } from "../../../hoc/filter/filterbox";
import { DropDownList } from "../dropdownlist/dropdownlist";

export const Category: FC<FilterBoxType> = ({ onChange }) => {
  return (
    <DropDownList
      label="category"
      items={Object.values(ProductCategory).map((item) => ({
        label: item,
        value: item,
      }))}
      onChange={onChange}
    />
  );
};

import { FC } from "react";
import { ProductColor } from "../../../../services/productService/product.interface";
import { FilterBoxType } from "../../../hoc/filter/filterbox";
import { DropDownList } from "../dropdownlist/dropdownlist";

export const ExteriorColor: FC<FilterBoxType> = ({ onChange }) => {
  return (
    <DropDownList
      label="exterior color"
      items={Object.values(ProductColor).map((item) => ({
        label: item,
        value: item,
      }))}
      onChange={onChange}
    />
  );
};

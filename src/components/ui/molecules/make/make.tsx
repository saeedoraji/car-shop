import { FC } from "react";
import { ProductMake } from "../../../../services/productService/product.interface";
import { FilterBoxType } from "../../../hoc/filter/filterbox";
import { DropDownList } from "../dropdownlist/dropdownlist";

export const Make: FC<FilterBoxType> = ({ onChange }) => {
  return (
    <DropDownList
      label="make"
      items={Object.values(ProductMake).map((item) => ({
        label: item,
        value: item,
      }))}
      onChange={onChange}
    />
  );
};

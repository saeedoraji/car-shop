import { FC } from "react";
import { ProductFuel } from "../../../../services/productService/product.interface";
import { FilterBoxType } from "../../../hoc/filter/filterbox";
import { DropDownList } from "../dropdownlist/dropdownlist";

export const Fuel: FC<FilterBoxType> = ({ onChange }) => {
  return (
    <DropDownList
      label="Fuel"
      items={Object.values(ProductFuel).map((item) => ({
        label: item,
        value: item,
      }))}
      onChange={onChange}
    />
  );
};

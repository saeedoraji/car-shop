import { FC } from "react";
import { ProductGrearbox } from "../../../../services/productService/product.interface";
import { FilterBoxType } from "../../../hoc/filter/filterbox";
import { DropDownList } from "../dropdownlist/dropdownlist";

export const Gearbox: FC<FilterBoxType> = ({ onChange }) => {
  return (
    <DropDownList
      label="Gearbox"
      items={Object.values(ProductGrearbox).map((item) => ({
        label: item,
        value: item,
      }))}
      onChange={onChange}
    />
  );
};

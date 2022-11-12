import { IProduct } from "../../../services/productService/product.interface";
import { IDropDownItems } from "../../ui/molecules/dropdownlist/drowndownlist.interface";
import { FilterEnum } from "../../ui/organisms/filter/filter.interface";

export type FilterBoxType = {
  value?: string;
  productList?: IProduct[];
  onChange?: (
    value1: IDropDownItems,
    value2?: IDropDownItems,
    name?: string
  ) => void;
};
export function FilterBox(
  Component: React.ComponentType<FilterBoxType>,
  name: FilterEnum
) {
  return (hocProps: FilterBoxType) => {
    const handleFilter = (value1: IDropDownItems, value2?: IDropDownItems) => {
      hocProps.onChange && hocProps.onChange(value1, value2, name);
    };
    return (
      <div className="flex p-5">
        <Component {...hocProps} onChange={handleFilter} />
      </div>
    );
  };
}

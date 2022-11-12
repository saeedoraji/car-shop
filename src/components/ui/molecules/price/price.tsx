import { FC } from "react";
import { FilterBoxType } from "../../../hoc/filter/filterbox";
import { Range } from "../range/range";

export const Price: FC<FilterBoxType> = ({ onChange }) => {
  const prices = Array(20)
    .fill(4000)
    .map((item, index) => item + index * 500);
  return (
    <Range
      label="price"
      itemsFrom={prices.map((item) => ({
        label: item.toString() + " €",
        value: item,
      }))}
      itemsTo={prices.map((item) => ({
        label: item.toString() + " €",
        value: item,
      }))}
      onChange={onChange}
    />
  );
};

import { FC } from "react";
import { FilterBoxType } from "../../../hoc/filter/filterbox";
import { Range } from "../range/range";

export const Power: FC<FilterBoxType> = ({ onChange }) => {
  const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <Range
      label="price"
      itemsFrom={prices.map((item) => ({
        label: item.toString() + " hp",
        value: item,
      }))}
      itemsTo={prices.map((item) => ({
        label: item.toString() + " hp",
        value: item,
      }))}
      onChange={onChange}
    />
  );
};

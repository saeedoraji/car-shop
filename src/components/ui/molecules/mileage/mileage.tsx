import { FC } from "react";
import { FilterBoxType } from "../../../hoc/filter/filterbox";
import { Range } from "../range/range";

export const Mileage: FC<FilterBoxType> = ({ onChange }) => {
  const mileages = [
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 75, 80, 85, 90, 95, 100,
  ];
  return (
    <Range
      label="kilometre"
      itemsFrom={mileages.map((item) => ({
        label: item.toString() + " km",
        value: item * 1000,
      }))}
      itemsTo={mileages.map((item) => ({
        label: item.toString() + " km",
        value: item * 1000,
      }))}
      onChange={onChange}
    />
  );
};

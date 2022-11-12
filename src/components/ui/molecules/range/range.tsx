import { FC, useState } from "react";
import Typography from "../../atoms/typography/typography";
import { TypographyVariant } from "../../atoms/typography/typography.interface";
import { DropDownList } from "../dropdownlist/dropdownlist";
import { IDropDownItems } from "../dropdownlist/drowndownlist.interface";
import { IRangeProps } from "./range.interface";

const enum RangeType {
  FROM,
  TO,
}
export const Range: FC<IRangeProps> = ({
  itemsFrom,
  itemsTo,
  label,
  onChange,
}) => {
  const [rangeValue, setRangeValue] = useState<{
    from: IDropDownItems;
    to: IDropDownItems;
  }>({
    from: { label: "", value: 0 },
    to: { label: "", value: Number.MAX_SAFE_INTEGER },
  });
  const handleChange = (type: RangeType, value: IDropDownItems) => {
    if (!onChange) return;
    if (type === RangeType.FROM) {
      setRangeValue({ ...rangeValue, from: value });
      if (value.value <= rangeValue.to.value) {
        onChange(value, rangeValue.to);
      } else {
        onChange(rangeValue.to, value);
      }
    } else {
      setRangeValue({ ...rangeValue, to: value });
      if (value.value >= rangeValue.from.value) {
        onChange(rangeValue.from, value);
      } else {
        onChange(value, rangeValue.from);
      }
    }
  };
  return (
    <div className="container flex flex-col">
      <Typography variant={TypographyVariant.BODY1} className="font-bold">
        {label}
      </Typography>
      <div className="flex flex-col items-start">
        <DropDownList
          label="from"
          items={itemsFrom}
          onChange={(value) => handleChange(RangeType.FROM, value)}
        />
        <DropDownList
          label="to"
          items={itemsTo}
          onChange={(value) => handleChange(RangeType.TO, value)}
        />
      </div>
    </div>
  );
};

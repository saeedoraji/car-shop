import { FC } from "react";
import Typography from "../typography/typography";
import { TypographyVariant } from "../typography/typography.interface";
import { ICheckboxProps } from "./checkbox.interface";

export const Checkbox: FC<ICheckboxProps> = ({ value, onClick }) => {
  return (
    <span className="flex items-center flex-row">
      <input type="checkbox" onClick={onClick} className="mr-1" />
      <Typography variant={TypographyVariant.BODY1}> {value}</Typography>
    </span>
  );
};

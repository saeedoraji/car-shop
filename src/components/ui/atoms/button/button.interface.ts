import React from "react";
import { ThemeLight, ThemeObjectSize, ThemeType } from "../../types/theme.type";

export interface IButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  theme: ThemeLight;
  size: ThemeObjectSize;
  type?: ThemeType;
  readonly disabled?: boolean;
}

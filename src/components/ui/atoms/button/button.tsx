import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Theme } from "../../theme/theme";
import { ThemeObjectSize, ThemeType } from "../../types/theme.type";
import { IButtonProps } from "./button.interface";

export const Button: FC<IButtonProps> = ({
  type = ThemeType.INFO,
  disabled,
  theme,
  size = ThemeObjectSize.MEDIUM,
  onClick,
  children,
}) => {
  const buttonColor = Theme[theme][type];
  const buttonHeight = Theme.size[size];
  return (
    <button
      className={twMerge(buttonColor, buttonHeight, "border-none")}
      disabled={disabled}
      onClick={onClick}
    >
      {children ?? null}
    </button>
  );
};

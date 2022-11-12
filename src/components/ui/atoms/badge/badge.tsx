import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Theme } from "../../theme/theme";
import {
  ThemeObjectSize,
  ThemeColor,
  ThemeLight,
} from "../../types/theme.type";
import { IBadgeProps } from "./badge.interface";

export const Badge: FC<IBadgeProps> = ({
  size = ThemeObjectSize.SMALL,
  color = ThemeColor.DEFAULT,
  theme = ThemeLight.PRIMARY,
  className = "",
  children,
}) => {
  const badgeBgColor = Theme[theme].badge[color];
  const badgeTextColor = Theme[theme].textColor[color];
  const badgeSize = Theme.size[size];
  return (
    <span
      className={twMerge(
        badgeBgColor,
        badgeTextColor,
        badgeSize,
        "w-fit p-2 rounded-md flex items-center",
        className
      )}
    >
      {children}
    </span>
  );
};

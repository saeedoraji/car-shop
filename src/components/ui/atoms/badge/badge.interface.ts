import {
  ThemeColor,
  ThemeLight,
  ThemeObjectSize,
} from "../../types/theme.type";

export interface IBadgeProps {
  children?: React.ReactNode;
  size?: ThemeObjectSize;
  color?: ThemeColor;
  theme?: ThemeLight;
  className?: string;
}

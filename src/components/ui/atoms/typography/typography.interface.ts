import { ThemeColor, ThemeLight } from "../../types/theme.type";

export enum TypographyVariant {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  BODY1 = "p",
}

export interface ITypographyProps {
  children?: React.ReactNode;
  variant: TypographyVariant;
  theme?: ThemeLight;
  color?: ThemeColor;
  className?: string;
}

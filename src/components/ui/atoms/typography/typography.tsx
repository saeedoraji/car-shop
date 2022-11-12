import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Theme } from "../../theme/theme";
import { ThemeColor, ThemeLight } from "../../types/theme.type";
import { ITypographyProps, TypographyVariant } from "./typography.interface";

const typographyCssClass = {
  [TypographyVariant.H1]: "text-8xl",
  [TypographyVariant.H2]: "text-6xl",
  [TypographyVariant.H3]: "text-5xl",
  [TypographyVariant.H4]: "text-3xl",
  [TypographyVariant.H5]: "text-2xl",
  [TypographyVariant.H6]: "text-xl",
  [TypographyVariant.BODY1]: "text-base",
};

const Typography: FC<ITypographyProps> = ({
  variant = TypographyVariant.BODY1,
  theme = ThemeLight.PRIMARY,
  color = ThemeColor.DEFAULT,
  className = "",
  children,
}) => {
  const Component = variant;
  return (
    <Component
      className={twMerge(
        "font-medium",
        typographyCssClass[variant],
        Theme[theme].textColor[color],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;

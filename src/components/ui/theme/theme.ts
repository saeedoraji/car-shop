import {
  ThemeColor,
  ThemeLight,
  ThemeObjectSize,
  ThemeType,
} from "../types/theme.type";

export const Theme = {
  size: {
    [ThemeObjectSize.SMALL]: "h-8 text-xs",
    [ThemeObjectSize.MEDIUM]: "h-10 text-base",
    [ThemeObjectSize.LARGE]: "h-12 text-lg",
  },
  [ThemeLight.PRIMARY]: {
    [ThemeType.INFO]: "bg-yellow-400/[.04]",
    [ThemeType.ERROR]: "bg-rose-400/[.04]",
    [ThemeType.SUCCESS]: "bg-lime-400/[.04]",
    [ThemeType.WARNING]: "bg-orange-600",
    bgColor: {
      [ThemeColor.DEFAULT]: "bg-white",
      [ThemeColor.ERROR]: "bg-rose-600",
      [ThemeColor.SUCCESS]: "bg-lime-600",
    },
    textColor: {
      [ThemeColor.DEFAULT]: "text-gray-700",
      [ThemeColor.ERROR]: "text-rose-600",
      [ThemeColor.SUCCESS]: "text-lime-600",
    },
    badge: {
      [ThemeColor.DEFAULT]: "bg-zinc-100",
      [ThemeColor.ERROR]: "bg-rose-100",
      [ThemeColor.SUCCESS]: "bg-lime-100",
    },
  },
  [ThemeLight.SECONDARY]: {
    [ThemeType.INFO]: "bg-lime-400/[.06]",
    [ThemeType.ERROR]: "bg-rose-600/[.06]",
    [ThemeType.SUCCESS]: "bg-lime-600/[.06]",
    [ThemeType.WARNING]: "bg-orange-400",
    bgColor: {
      [ThemeColor.DEFAULT]: "bg-white",
      [ThemeColor.ERROR]: "bg-rose-200",
      [ThemeColor.SUCCESS]: "bg-lime-200",
    },
    textColor: {
      [ThemeColor.DEFAULT]: "text-white",
      [ThemeColor.ERROR]: "text-rose-200",
      [ThemeColor.SUCCESS]: "text-lime-200",
    },
    badge: {
      [ThemeColor.DEFAULT]: "bg-zinc-100",
      [ThemeColor.ERROR]: "bg-rose-100",
      [ThemeColor.SUCCESS]: "bg-lime-100",
    },
  },
};

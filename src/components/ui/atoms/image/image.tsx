import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const Image: FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = (props) => {
  return (
    <img
      {...props}
      alt={props.alt}
      className={twMerge("rounded-lg object-cover", props.className)}
      loading="lazy"
    />
  );
};

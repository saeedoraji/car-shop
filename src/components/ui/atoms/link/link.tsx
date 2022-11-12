import { FC } from "react";

export const Link: FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = (props) => {
  return <a {...props}>{props.children}</a>;
};

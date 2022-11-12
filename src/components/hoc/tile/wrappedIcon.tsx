export const wrappedIcon = (
  WrappedComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
) => {
  return <WrappedComponent width={12} className="mr-1" />;
};

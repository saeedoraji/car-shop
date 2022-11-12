import { Badge } from "../../ui/atoms/badge/badge";

export const wrappedBadge = (wrappedElement: React.ReactElement) => {
  return <Badge className="mr-2 mt-2">{wrappedElement}</Badge>;
};

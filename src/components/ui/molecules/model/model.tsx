import { FC, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { parse } from "query-string";
import { FilterBoxType } from "../../../hoc/filter/filterbox";
import { DropDownList } from "../dropdownlist/dropdownlist";
import { IDropDownItems } from "../dropdownlist/drowndownlist.interface";

const mapData = (filteredProductList: string[]): IDropDownItems[] => {
  return (
    filteredProductList?.map((item) => ({
      label: item,
      value: item,
    })) ?? []
  );
};

export const Model: FC<FilterBoxType> = ({ productList, onChange }) => {
  const [searchParams] = useSearchParams();

  const visibleModels = useMemo(() => {
    const filterObject = parse(searchParams.toString());

    return (
      productList?.filter((item) => item.make === filterObject["make"]) ?? []
    ).map((item) => item.model);
  }, [productList, searchParams]);

  return (
    <DropDownList
      label="model"
      items={mapData(Array.from(new Set(visibleModels)))}
      onChange={onChange}
    />
  );
};

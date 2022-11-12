import { FC, useCallback } from "react";
import { parse } from "query-string";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FilterBox } from "../../../hoc/filter/filterbox";
import { Category } from "../../molecules/category/category";
import { ExteriorColor } from "../../molecules/exteriorColor/exteriorColor";
import { Fuel } from "../../molecules/fuel/fuel";
import { Gearbox } from "../../molecules/gearbox/gearbox";
import { Make } from "../../molecules/make/make";
import { Model } from "../../molecules/model/model";
import { Mileage } from "../../molecules/mileage/mileage";
import { Power } from "../../molecules/power/power";
import { Price } from "../../molecules/price/price";
import { IProduct } from "../../../../services/productService/product.interface";
import { FilterEnum } from "./filter.interface";
import { IDropDownItems } from "../../molecules/dropdownlist/drowndownlist.interface";

const MakeFilter = FilterBox(Make, FilterEnum.MAKE);
const ModelFilter = FilterBox(Model, FilterEnum.MODEL);
const MileageFilter = FilterBox(Mileage, FilterEnum.MILEAGE);
const PowerFilter = FilterBox(Power, FilterEnum.POWER);
const FuelFilter = FilterBox(Fuel, FilterEnum.FUEL);
const PriceFilter = FilterBox(Price, FilterEnum.PRICE);
const GearboxFilter = FilterBox(Gearbox, FilterEnum.GEARBOX);
const ExteriorColorFilter = FilterBox(ExteriorColor, FilterEnum.EXTERIOR_COLOR);
const CategoryFilter = FilterBox(Category, FilterEnum.CATEGORY);

const filterBoxes = [
  { Component: MakeFilter, id: 1 },
  { Component: ModelFilter, id: 2 },
  { Component: MileageFilter, id: 3 },
  { Component: PowerFilter, id: 4 },
  { Component: FuelFilter, id: 5 },
  { Component: PriceFilter, id: 6 },
  { Component: GearboxFilter, id: 7 },
  { Component: ExteriorColorFilter, id: 8 },
  { Component: CategoryFilter, id: 9 },
];

export const Filter: FC<{ productList: IProduct[] }> = ({ productList }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleFilter = useCallback(
    (value1: IDropDownItems, value2?: IDropDownItems, name: string = "") => {
      let searchParamsObj = {
        ...parse(searchParams.toString()),
        [name]: value1.value,
      };
      if (value2) {
        searchParamsObj[name + "_to"] = value2.value;
      }
      navigate(
        "/autos?" +
          new URLSearchParams(
            searchParamsObj as
              | string
              | URLSearchParams
              | string[][]
              | Record<string, string>
              | undefined
          ).toString(),
        { replace: true }
      );
    },
    [searchParams]
  );

  return (
    <div className="flex flex-col w-full p-5">
      {filterBoxes.map((FilterBoxWrapped, index) => (
        <FilterBoxWrapped.Component
          key={FilterBoxWrapped.id}
          onChange={handleFilter}
          productList={productList}
        />
      ))}
    </div>
  );
};

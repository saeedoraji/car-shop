import { FC, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { IDropDownItems, IDropDownList } from "./drowndownlist.interface";
import Typography from "../../atoms/typography/typography";
import { TypographyVariant } from "../../atoms/typography/typography.interface";
import { twMerge } from "tailwind-merge";

export const DropDownList: FC<IDropDownList> = (props) => {
  const [selectdValue, setSelectedValue] = useState<IDropDownItems>({
    label: "Choose one",
    value: "-1",
  });

  const selectItem = (item: IDropDownItems) => {
    props.onChange && props.onChange(item);
    setSelectedValue(item);
  };
  return (
    <div className="flex justify-center">
      <div>
        <Typography
          variant={TypographyVariant.BODY1}
          className="font-bold mb-1"
        >
          {props.label}
        </Typography>
        <div className="dropdown relative">
          <a
            className="dropdown-toggle px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
            href="#"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectdValue.label}
            <ChevronDownIcon width={16} />
          </a>
          <ul
            className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none max-h-60 overflow-auto"
            aria-labelledby="dropdownMenuButton2"
          >
            {props.items?.map((item) => (
              <li key={item.value}>
                <a
                  className={twMerge(
                    "dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100",
                    item.value === selectdValue.value && "font-bold"
                  )}
                  href="#"
                  onClick={() => selectItem(item)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

import { IDropDownItems } from "../dropdownlist/drowndownlist.interface";

export interface IRangeProps {
  itemsFrom: IDropDownItems[];
  itemsTo: IDropDownItems[];
  label: string;
  onChange?: (valueFrom: IDropDownItems, valueTo?: IDropDownItems) => void;
}

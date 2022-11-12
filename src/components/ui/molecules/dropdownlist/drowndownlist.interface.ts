export interface IDropDownItems {
  label: string;
  value: number | string;
}

export interface IDropDownList {
  label: string;
  items: IDropDownItems[];
  onChange?: (value: IDropDownItems) => void;
}

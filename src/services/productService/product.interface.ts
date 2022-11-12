export enum ProductMake {
  SEAT = "SEAT",
  VOLKSWAGEN = "VOLKSWAGEN",
  SKODA = "SKODA",
  NISSAN = "NISSAN",
  FIAT = "FIAT",
  TOYOTA = "TOYOTA",
  SMART = "SMART",
  KIA = "KIA",
  PEUGEOT = "PEUGEOT",
}

export enum ProductFuel {
  PETROL = "PETROL",
  DIESEL = "DIESEL",
  ELECTRICITY = "ELECTRICITY",
}

export enum ProductColor {
  WHITE = "WHITE",
  BLACK = "BLACK",
  SILVER = "SILVER",
  RED = "RED",
  BROWN = "BROWN",
  GREY = "GREY",
  BLUE = "BLUE",
}

export enum ProductCategory {
  SMALLCAR = "SMALLCAR",
  ESTATECAR = "ESTATECAR",
  TRANSPORTER = "TRANSPORTER",
  LIMOUSINE = "LIMOUSINE",
}

export enum ProductGrearbox {
  MANUAL_GEAR = "MANUAL_GEAR",
  AUTOMATIC_GEAR = "AUTOMATIC_GEAR",
}

export interface IProduct {
  vehicleId: string;
  make: ProductMake;
  model: string; // i'm going to aggregate data got from api and calculate models
  mileage: number;
  power: number;
  firstRegistration: string; // i'm setting string(not date) becuase there are some dirty data : 8.2019.01.0
  fuel: ProductFuel;
  consumptionUnit: string;
  consumptionCombined: number;
  co2: number;
  monthlyInstallment: number;
  price: number;
  image: string;
  gearbox: ProductGrearbox;
  category: ProductCategory;
  exteriorColor: ProductColor;
  images: string[];
  variant: string; // i added this field to make tile prettier
}

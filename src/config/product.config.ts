export const PRODUCT_PAGE_LIMIT = 6;
// should be fetched from server !!
// can add any other config( color, order, hint, ...)
export const PRODUCT_FIELD_CONFIG = [
  { name: "variant", type: "string", isDetail: true },
  { name: "make", type: "string", isDetail: true },
  { name: "model", type: "string", isDetail: true },
  { name: "mileage", type: "number", isDetail: true },
  { name: "power", type: "number", isDetail: true },
  { name: "firstRegistration", type: "string", isDetail: true },
  { name: "fuel", type: "string", isDetail: true },
  { name: "consumptionUnit", type: "string", isDetail: true },
  { name: "consumptionCombined", type: "number", isDetail: true },
  { name: "co2", type: "number", isDetail: false },
  { name: "monthlyInstallment", type: "number", isDetail: false },
  { name: "image", type: "string", isDetail: false },
  { name: "gearbox", type: "string", isDetail: true },
  { name: "category", type: "string", isDetail: true },
  { name: "exteriorColor", type: "string", isDetail: true },
  { name: "price", type: "number", isDetail: true },
] as const;

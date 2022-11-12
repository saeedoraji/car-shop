import { FC } from "react";
import { IProduct } from "../../../../services/productService/product.interface";
import { Divider } from "../../atoms/divider/devider";
import { Image } from "../../atoms/image/image";
import Typography from "../../atoms/typography/typography";
import { TypographyVariant } from "../../atoms/typography/typography.interface";
import { ReactComponent as FuelIcon } from "../../../../assets/icons/fuel.svg";
import { ReactComponent as NaturalIcon } from "../../../../assets/icons/natural.svg";
import { ReactComponent as MileageIcon } from "../../../../assets/icons/mileage.svg";
import { ReactComponent as GearboxIcon } from "../../../../assets/icons/gearbox.svg";
import { ReactComponent as DateIcon } from "../../../../assets/icons/date.svg";
import { wrappedBadge } from "../../../hoc/tile/wrappedBadge";
import { wrappedIcon } from "../../../hoc/tile/wrappedIcon";
import { formatPrice } from "../../../../services/utils/utils";

export const Tile: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="w-full relative flex flex-col rounded-lg shadow-lg shadow-gray-500/50 hover:scale-105 bg-white hover:-translate-y-1 transition ease-in-out delay-250 duration-500">
      <Image
        src={product.image}
        width="100%"
        alt={product.make + " " + product.model}
        className="h-60"
      />
      <div className="container px-4 pb-14 pt-4">
        <div className="flex flex-col">
          <Typography variant={TypographyVariant.H5}>
            {product.make} {product.model}
          </Typography>
          <Typography variant={TypographyVariant.BODY1}>
            {product.variant}
          </Typography>
        </div>
        <div className="pb-5 flex flex-wrap">
          {wrappedBadge(
            <>
              {wrappedIcon(NaturalIcon)}
              {product.consumptionCombined} {product.consumptionUnit}/100km
              (comb.)*
            </>
          )}

          {wrappedBadge(
            <>
              {wrappedIcon(MileageIcon)} {product.mileage}
            </>
          )}
          {wrappedBadge(
            <>
              {wrappedIcon(NaturalIcon)} {product.power} Hp
            </>
          )}
          {wrappedBadge(
            <>
              {wrappedIcon(GearboxIcon)} {product.gearbox}
            </>
          )}
          {wrappedBadge(
            <>
              {wrappedIcon(DateIcon)} {product.firstRegistration}
            </>
          )}
          {wrappedBadge(
            <>
              {wrappedIcon(FuelIcon)} {product.fuel}
            </>
          )}
        </div>

        <div className="flex w-full flex-col p-4 absolute bottom-0 left-0">
          <Divider />
          <div className="flex  justify-between mt-2">
            <Typography variant={TypographyVariant.BODY1} className="font-bold">
              from {formatPrice({ amount: product.monthlyInstallment })}/Monthly
            </Typography>
            <Typography variant={TypographyVariant.BODY1} className="font-bold">
              {formatPrice({ amount: product.price })}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

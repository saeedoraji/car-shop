import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { IProduct } from "../../../../services/productService/product.interface";
import { Image } from "../../atoms/image/image";
// import ImageGallery from "react-image-gallery";

export const Gallery: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        {product.images.map((_, index) => (
          <button
            key={index}
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to={index.toString()}
            className={!index ? "active" : ""}
            aria-current={!index ? "true" : "false"}
            aria-label={`Slide ${index}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner relative w-full overflow-hidden">
        {product.images.map((item, index) => (
          <div
            key={index}
            className={twMerge(
              "carousel-item relative float-left w-full",
              !index && "active"
            )}
          >
            <Image src={item} className="block w-full" alt={product.variant} />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

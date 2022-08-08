import { SwiperSlide } from "swiper/react";
import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
SwiperCore.use([Autoplay, Navigation, Pagination]);
/////////
import {
  ProductsContainer,
  ProductSwiperContainer,
  HomeButton,
  ProductSliderHeader,
} from "./product.style";

import { productsData } from "./productSilderData";
import CommonProductCard from "../../productCard/productCard";

const ProductSlider = ({ showTitle, title }) => {
  return (
    <ProductsContainer
      direction="row"
      alignItems="center"
      className=" homeCarousel"
    >
      {showTitle && <h6>new arrivals</h6>}
      <ProductSliderHeader variant="h4">
        {title}
      </ProductSliderHeader>
      <ProductSwiperContainer
        autoplay={{
          delay: 6500,
          disableOnInteraction: true,
        }}
        spaceBetween={10}
        breakpoints={{
          9: {
            slidesPerView: 1,
          },

          854: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
        navigation={false}
        loop={true}
      >
        {productsData.map((product, i) => (
          <SwiperSlide
            key={i}
            style={{ display: "grid", placeItems: "center" }}
          >
            <CommonProductCard product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiperContainer>
      {showTitle && <HomeButton>shop by collection</HomeButton>}
    </ProductsContainer>
  );
};

export default ProductSlider;

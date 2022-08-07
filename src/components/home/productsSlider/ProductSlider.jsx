import { SwiperSlide } from "swiper/react";
import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);
/////////
import {
  NavButton,
  ProductCard,
  ProductName,
  ProductsContainer,
  ProductSwiperContainer,
  ImageBox,
  HomeButton,
  ProductContent,
} from "./product.style";
import Image from "next/image";
import { H1 } from "../../../utilities/theme/components";
import { productsData } from "./productSilderData";
import CommonProductCard from "../../productCard/productCard";

const ProductSlider = () => {
  // const navigationPrevRef = React.useRef(null);
  // const navigationNextRef = React.useRef(null);

  return (
    <ProductsContainer
      direction="row"
      alignItems="center"
      className=" homeCarousel"
    >
      <h6>new arrivals</h6>
      <H1 margin="0rem 0 -1rem 0" variant="h4">
        every week
      </H1>
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
          // 1150: {
          //   slidesPerView: 4,
          // },
          // 1400: {
          //   slidesPerView: 5,
          // },
          // 1600: {
          //   slidesPerView: 6,
          // },
        }}
        navigation={false}
        // navigation={{
        //   prevEl: navigationPrevRef.current,
        //   nextEl: navigationNextRef.current,
        // }}
        // onBeforeInit={(swiper) => {
        //   ProductsContainer;
        //   swiper.params.navigation.prevEl = navigationPrevRef.current;
        //   swiper.params.navigation.nextEl = navigationNextRef.current;
        // }}
        // centeredSlides={true}
        // centeredSlidesBounds={true}
        loop={true}
      >
        {/* <NavButton
          ref={navigationPrevRef}
          margin={"auto 0 auto -61%"}
          marginSmall={"auto 0 auto -90%"}
        >
          <Image
            src="/images/icons/prev.png"
            alt="slider-controllers"
            width={26}
            height={23}
          />
        </NavButton>
        <NavButton
          ref={navigationNextRef}
          margin={"auto  0 auto 15%"}
          marginSmall={"auto 0 auto 55%"}
        >
          <Image
            src="/images/icons/next.png"
            alt="slider-controllers"
            width={26}
            height={23}
          />
        </NavButton> */}
        {productsData.map((product, i) => (
          <SwiperSlide
            key={i}
            style={{ display: "grid", placeItems: "center" }}
          >
            <CommonProductCard product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiperContainer>
      <HomeButton>shop by collection</HomeButton>
    </ProductsContainer>
  );
};

export default ProductSlider;

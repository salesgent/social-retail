import React, { useState, useRef } from "react";
import Image from "next/image";
import cx from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

////////////////////////////////////////////////////////////////
import styles from "./carousel.module.scss";



// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs, Controller } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const ProductImgCarousel = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperThumbs, updateSwiperThumbs] = useState(null);
  let thumbsParams = {
    modules: [Controller],
    slideToClickedSlide: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    getSwiper: updateSwiperThumbs, // Get swiper instance callback
    style: {
      width: "100px",
    },
  };

  return (
    <div className={cx(styles.container, "imageGalleryContainer")}>
      <Swiper
        loop={true}
        spaceBetween={20}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.mainSwiper}
      >
        {images.map((image, I) => (
          <SwiperSlide key={I}>
            <div className={styles.img}>
              <Image
                src={
                  image && image !== "null"
                    ? image
                    : "/images/product-imgnotfound.png"
                }
                alt="product full image"
                // layout="responsive"
                blurDataURL="/images/product-imgnotfound.png"
                // width={459}
                // height={550}
                layout="fill"
                placeholder="blur"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.thumbContainer}>
        <Swiper
          // onSwiper={setThumbsSwiper}
          // spaceBetween={20}
          // slidesPerView={4}
          className={styles.thumbSwiper}
          // freeMode={true}
          // watchSlidesProgress={true}
          // direction={"horizontal"}
          {...thumbsParams}
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <div tabIndex="0" className={cx(styles.thumbSlide, "thumb")}>
                <Image
                  src={
                    image && image !== "null"
                      ? image
                      : "/images/product-imgnotfound.png"
                  }
                  alt="product full image"
                  layout="fill"
                  blurDataURL="/images/product-imgnotfound.png"
                  placeholder="blur"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImgCarousel;

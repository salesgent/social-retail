// import cx from "classnames";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { useAnimation, motion } from "framer-motion";
////////////////////////////////////////////////////////////
import { useDatafetcher } from "../../../utilities/hooks/useDatafetcher";
import styles from "./style.module.scss";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const LandingCarousel = () => {
  const [trigger, setTrigger] = useState(false);
  const { data, error } = useDatafetcher(
    "/home/sliderImages?sliderType=primary&businessTypeId=1"
  );
  const controls = useAnimation();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  useEffect(() => {
    controls.set({
      width: 0,
    });
    controls.start({
      width: "100%",
      transition: { duration: 5.1 },
    });
  }, [trigger, controls]);

  return (
    <div className="homeCarousel">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        onSlideChange={() => {
          setTrigger(!trigger);
        }}
        pagination={pagination}
        className={styles.slidesContainer}
      >
        {data?.sliderImageList?.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className={styles.slide}>
              <img src={slide.imageUrl} alt="slider Image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.progressBar}>
        <motion.div
          animate={controls}
          exit={{
            width: 0,
          }}
          className={styles.fill}
        ></motion.div>
      </div>
    </div>
  );
};

export default LandingCarousel;

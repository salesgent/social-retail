import Head from "next/head";
import styled from "styled-components";
import dynamic from "next/dynamic";
////////////////////////////////////////////////////////
//////swiper slider/////////////////
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//////

const BrandCarousel = dynamic(
  () => import("../src/components/home/Brands/Brands"),
  { ssr: false }
);
const ProductSlider = dynamic(
  () => import("../src/components/home/productsSlider/ProductSlider"),
  { ssr: false }
);
import LandingCarousel from "../src/components/home/LandingCarousel/LandingCarousel";
import OfferBanner from "../src/components/home/OfferBanner/OfferBanner";
import Banner from "../src/components/home/Banner/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingCarousel />
        <OfferBanner color="black" />
        <BrandCarousel />
        <ProductSlider />
        <Banner/>
      </main>
    </div>
  );
}

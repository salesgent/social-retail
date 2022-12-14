import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import { Rating, Stack } from "@mui/material";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
//////////
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  ProductDetailsSection,
  ProductView,
  ProductDetailsContainer,
  ProductDetailsBox,
  ProductDetailedName,
  PriceBox,
  RatingBox,
  ProductImageContainer,
  QuantitySection,
  QuantityBox,
  BtnsSection,
  SkuBox,
  TabsContainer,
  FullDescriptionBox,
  ProductDetailsTitle,
  SkuTable,
} from "../../src/components/product-details/ProductDetails.styles";
import RouteBar from "../../src/components/product-list/RouteBar";
import { useDatafetcher } from "../../src/utilities/hooks/useDatafetcher";

import useArray from "../../src/utilities/hooks/useArray";

import OfferBanner from "../../src/components/home/OfferBanner/OfferBanner";
import { ProductButton } from "../../src/components/productCard/productCard.style";
import BrandCarousel from "../../src/components/home/Brands/Brands";
import { localAddToCart } from "../../src/service/asyncFunctions/cart";

const ProductImgCarousel = dynamic(
  () =>
    import(
      "../../src/components/product-details/ProductImageCarousel/ProductImageCarousel"
    ),
  {
    ssr: false,
  }
);


const ProductsDetailsPage = () => {
  const [value, setValue] = useState(4);
  const [flavour, setflavour] = useState("");
  const [selectedTab, setSelectedTab] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const id = useSelector((state) => state.products.productsId);
  const localCartData = useSelector((state) => state.cart.localCartData);

  const { data: product, error } = useDatafetcher(
    `/ecommerce/product/${id}?storeIds=${1}`
  );
  let images =
    product?.productImageList && product?.productImageList.length > 0
      ? product?.productImageList
      : ["/images/product-imgnotfound.png"];

  const handleChange = (event) => {
    setflavour(event.target.value);
  };
  const handleIncremenDecrement = (type) => {
    const { minQuantityToSale, availableQuantity } =
      product.masterProductDetails;
    if (type === "increment") {
      if (quantity >= availableQuantity) {
        setAlert("warn", `only ${availableQuantity} is available`)(dispatch);
        setQuantity(parseInt(availableQuantity));
      } else {
        setQuantity(parseInt(quantity + 1));
      }
    } else {
      if (quantity <= minQuantityToSale) {
        if (minQuantityToSale > availableQuantity) {
          setQuantity(parseInt(availableQuantity));
        } else {
          setQuantity(parseInt(minQuantityToSale));
        }
      } else {
        setQuantity(parseInt(quantity - 1));
      }
    }
  };
  ////////add to cart func
  const addToCart = () => {
    localAddToCart(
      [{ ...product.masterProductDetails, quantity: 1 }],
      localCartData
    )(dispatch);
  };

  //menu styles
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 250,
        maxWidth: 350,
      },
    },
  };

  //////descriptions
  const fullDescription = () => {
    if (product?.masterProductDetails?.fullDescription?.length > 1) {
      return { __html: product.masterProductDetails?.fullDescription };
    } else {
      return { __html: "<p> No Product Related description found! </p>" };
    }
  };
  const shortDescription = () => {
    return { __html: product?.masterProductDetails?.shortDescription };
  };

  return (
    <ProductDetailsSection>
      <OfferBanner />
      <ProductDetailsContainer>
        <RouteBar onDetailsPage={true} />
        <ProductView>
          <ProductImageContainer>
            <ProductImgCarousel images={images} />
          </ProductImageContainer>
          <ProductDetailsBox>
            <ProductDetailsTitle>Mya Bambino Gold Social</ProductDetailsTitle>
            <ProductDetailedName>
              {product?.masterProductDetails?.productName}
            </ProductDetailedName>
            <RatingBox>
              <span className="text">7 sold in last 10 hours</span>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <p>4.9 (2130 reviews)</p>
            </RatingBox>

            <SkuTable>
              <b>Brand:</b> Social Hookah
              <br /> <b>Product Code:</b> J01379 <br />
              <b>Availability:</b> In stock
            </SkuTable>

            {product?.masterProductDetails?.standardPrice ===
            product?.masterProductDetails?.standardPriceWithoutDiscount ? (
              <PriceBox>
                <h6>
                  ${product?.masterProductDetails?.standardPrice?.toFixed(2)}
                </h6>
              </PriceBox>
            ) : (
              <PriceBox>
                <span>
                  $
                  {product?.masterProductDetails?.standardPriceWithoutDiscount?.toFixed(
                    2
                  )}
                </span>
                <h6>
                  ${product?.masterProductDetails?.standardPrice?.toFixed(2)}
                </h6>
              </PriceBox>
            )}
            <QuantitySection>
              <h6>Available Colors:</h6>
              <Stack
                flexDirection="row"
                justfiyContent="center"
                alignItems="center"
              >
                <span className="lightBlue" tabIndex={1}></span>
                <span className="lightGreen" tabIndex={1}></span>
              </Stack>
            </QuantitySection>
            <QuantitySection>
              <h6>Quantity:</h6>
              <QuantityBox>
                <span
                  onClick={() => {
                    handleIncremenDecrement("decremeent");
                  }}
                >
                  <AiOutlineMinus />
                </span>
                <span className="qt">{quantity}</span>
                <span
                  onClick={() => {
                    handleIncremenDecrement("increment");
                  }}
                >
                  <AiOutlinePlus />
                </span>
              </QuantityBox>
            </QuantitySection>
            <BtnsSection>
              <ProductButton onClick={() => addToCart()}>
                add to cart
              </ProductButton>
              <ProductButton>buy now</ProductButton>
            </BtnsSection>
          </ProductDetailsBox>
        </ProductView>
        <TabsContainer>
          <div
            className="tab"
            onClick={() => setSelectedTab(1)}
            style={selectedTab === 1 ? { background: "#F6F6F6" } : {}}
          >
            <h6>description</h6>
          </div>
          <div
            className="tab"
            onClick={() => setSelectedTab(2)}
            style={selectedTab === 2 ? { background: "#F6F6F6" } : {}}
          >
            <h6
              style={
                selectedTab === 2 ? {} : { borderRight: "2px solid black" }
              }
            >
              specifications
            </h6>
          </div>
          <div
            className="tab"
            onClick={() => setSelectedTab(3)}
            style={selectedTab === 3 ? { background: "#F6F6F6" } : {}}
          >
            <h6>Reviews</h6>
          </div>
        </TabsContainer>
        <FullDescriptionBox>
          {selectedTab === 1 && (
            <div dangerouslySetInnerHTML={fullDescription()} />
          )}
        </FullDescriptionBox>
      </ProductDetailsContainer>
      <BrandCarousel />
    </ProductDetailsSection>
  );
};

export default ProductsDetailsPage;

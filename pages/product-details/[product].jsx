import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import { Rating } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
//////////
import {
  ProductDetailsSection,
  ProductView,
  ProductDetailsContainer,
  ProductDetailsBox,
  ProductDetailedName,
  ProductShortDescriptions,
  PriceBox,
  RatingBox,
  ProductImageContainer,
  CategorySelector,
  QuantitySection,
  QuantityBox,
  BtnsSection,
  SkuBox,
  TabsContainer,
  FullDescriptionBox,
} from "../../src/components/product-details/ProductDetails.styles";
import RouteBar from "../../src/components/product-list/RouteBar";
import { ProductsHeader } from "../../src/components/product-list/style";
import { useDatafetcher } from "../../src/utilities/hooks/useDatafetcher";
import { H1 } from "../../src/utilities/theme/components";
import { setAlert } from "../../src/service/asyncFunctions/home";
import { setCartData } from "../../src/store/cart";
import useArray from "../../src/utilities/hooks/useArray";
import { LocalCartFunction } from "../../src/service/asyncFunctions/cart";

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
  const cartData = useSelector((state) => state.cart.cartData);

  const { push, array } = useArray(cartData);

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
  const LocalAddToCart = () => {
    LocalCartFunction(array, product.masterProductDetails)(push)(dispatch);
  };
  useEffect(() => {
    if (array.length > 0) {
      dispatch(setCartData(array));
    }
  }, [array]);

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
      <ProductsHeader>
        <H1 variant="h2">PRODUCTS</H1>
      </ProductsHeader>
      <ProductDetailsContainer>
        <RouteBar onDetailsPage={true} />
        <ProductView>
          <ProductImageContainer>
            <ProductImgCarousel images={images} />
          </ProductImageContainer>
          <ProductDetailsBox>
            <ProductDetailedName>
              {product?.masterProductDetails?.productName}
            </ProductDetailedName>
            <RatingBox>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <p>4.9 (2130 reviews)</p>
            </RatingBox>
            <ProductShortDescriptions
              dangerouslySetInnerHTML={shortDescription()}
            ></ProductShortDescriptions>
            {product?.content && product?.content?.length > 0 && (
              <CategorySelector>
                <h4>Flavours :</h4>
                <FormControl>
                  <InputLabel id="flavour-select" sx={{ lineHeight: "13px" }}>
                    CHOOSE A FLAVOUR
                  </InputLabel>
                  <Select
                    labelId="flavour-select"
                    className="flavour-select"
                    MenuProps={MenuProps}
                    value={flavour}
                    label="CHOOSe A FLAVOUR"
                    onChange={handleChange}
                    SelectDisplayProps={{
                      style: {
                        maxHeight: 40,
                        minWidth: 280,
                        maxWidth: 350,
                        borderRadius: 7,
                        padding: "10px 10px",
                      },
                    }}
                  >
                    {product?.content?.map((flavour, i) => (
                      <MenuItem key={i} value="">
                        <em>None</em>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CategorySelector>
            )}
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
              <h6>Earn up to 195 Loyalty Points:</h6>
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
              <button onClick={() => LocalAddToCart()}>Add to cart</button>
              <span>
                <AiOutlineHeart />
              </span>
            </BtnsSection>
            <hr />
            <SkuBox>
              SKU: N/A
              <br />
              Categories: Delta-8 Products, Disposables, Vape
              <br />
              Brand: Flying Monkey
              <br />
            </SkuBox>
          </ProductDetailsBox>
        </ProductView>
        <TabsContainer>
          <div className="tab" onClick={() => setSelectedTab(1)}>
            <h6
              style={
                selectedTab === 1 ? { color: "#DF363E", fontWeight: 700 } : {}
              }
            >
              Product Details
            </h6>
            <span style={selectedTab === 1 ? { width: "100%" } : {}}></span>
          </div>
          <div className="tab" onClick={() => setSelectedTab(2)}>
            <h6
              style={
                selectedTab === 2 ? { color: "#DF363E", fontWeight: 700 } : {}
              }
            >
              Additional information
            </h6>
            <span style={selectedTab === 2 ? { width: "100%" } : {}}></span>
          </div>
          <div className="tab" onClick={() => setSelectedTab(3)}>
            <h6
              style={
                selectedTab === 3 ? { color: "#DF363E", fontWeight: 700 } : {}
              }
            >
              Reviews (0)
            </h6>
            <span style={selectedTab === 3 ? { width: "100%" } : {}}></span>
          </div>
        </TabsContainer>
        <FullDescriptionBox>
          {selectedTab === 1 && (
            <div dangerouslySetInnerHTML={fullDescription()} />
          )}
        </FullDescriptionBox>
      </ProductDetailsContainer>
    </ProductDetailsSection>
  );
};

export default ProductsDetailsPage;

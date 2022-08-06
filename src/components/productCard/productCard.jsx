import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import { Rating } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
////////////////////////////////////////////////////////////////
import {
  BottomBtns,
  ImageBox,
  ProductCardContainer,
  ProductPrice,
  RatingBox,
  Tagbox,
} from "./productCard.style";
import useArray from "../../utilities/hooks/useArray";
import { setCartData } from "../../store/cart";
import {
  localAddToCart,
  LocalCartFunction,
} from "../../service/asyncFunctions/cart";

const ProductCard = ({ product, selectedId, setSelectedId }) => {
  const [rating, setrating] = useState(4.5);
  const Router = useRouter();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);
  const localCartData = useSelector((state) => state.cart.localCartData);

  ////////add to cart func
  const LocalAddToCart = () => {
    localAddToCart([{ ...product, quantity: 1 }], localCartData)(dispatch);
  };

  return (
    <ProductCardContainer
      background={product.bgImage}
      onMouseEnter={() => {
        setSelectedId(product.productId);
      }}
      onMouseLeave={() => {
        setSelectedId(-1);
      }}
      onClick={() => {
        Router.push(
          `/product-details/${product.alias}?id=${product.productId}`
        );
      }}
      style={selectedId === -1 ? { opacity: 1 } : { opacity: 0.6 }}
      hovered={selectedId === product.productId ? "hovered" : undefined}
    >
      <ImageBox>
        <Image
          src={
            product.imageUrl && product.imageUrl !== "null"
              ? product.imageUrl
              : "/images/product-imgnotfound.png"
          }
          alt={product.productName}
          layout="fill"
          blurDataURL="/images/product-imgnotfound.png"
          placeholder="blur"
        />
      </ImageBox>
      <Tagbox>{product.productName}</Tagbox>

      {product.standardPrice?.toFixed(2) ===
      product.standardPriceWithoutDiscount?.toFixed(2) ? (
        <ProductPrice>
          <p>${product.standardPrice?.toFixed(2)}</p>
        </ProductPrice>
      ) : (
        <ProductPrice>
          <span>${product.standardPriceWithoutDiscount?.toFixed(2)}</span>
          <p>${product.standardPrice?.toFixed(2)}</p>
        </ProductPrice>
      )}
      {selectedId === product.productId && (
        <RatingBox>
          <Rating
            value={rating}
            onChange={(e) => setrating(e.target.value)}
            readOnly
            size="small"
          />
          <p>4.9 (2130 reviews)</p>
        </RatingBox>
      )}
      {selectedId !== product.productId ? (
        <BottomBtns>
          <AiOutlinePlus />
          <p>learn more</p>
        </BottomBtns>
      ) : (
        <BottomBtns justifyContent="space-between">
          <button
            onClick={(e) => {
              e.stopPropagation();
              LocalAddToCart();
            }}
          >
            <p>add to card</p>
          </button>
          <button>
            <AiOutlinePlus />
            <p>learn more</p>
          </button>
        </BottomBtns>
      )}
    </ProductCardContainer>
    // </div>
  );
};

export default ProductCard;

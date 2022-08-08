import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Rating } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
////////////////////////////////////////////////////////////////
import { localAddToCart } from "../../service/asyncFunctions/cart";
import {
  ImageBox,
  ProductButton,
  ProductCard,
  ProductContent,
  ProductName,
  ProductPrice,
} from "./productCard.style";

const CommonProductCard = ({ product }) => {
  const [rating, setrating] = useState(4);
  const Router = useRouter();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);
  const localCartData = useSelector((state) => state.cart.localCartData);

  ////////add to cart func
  const addToCart = () => {
    localAddToCart([{ ...product, quantity: 1 }], localCartData)(dispatch);
  };

  return (
    <ProductCard className="product-card">
      <ImageBox>
        <Image
          src={
            product.imageUrl && product.imageUrl !== "null"
              ? product.imageUrl
              : "/images/product-imgnotfound.png"
          }
          alt={product.productName}
          layout="fill"
          placeholder="blur"
          blurDataURL="/images/product-imgnotfound.png"
        />
      </ImageBox>
      <ProductContent>
        <span className="title">
          {product?.title || "Mya bambino gold social"}
        </span>
        <ProductName>{product.productName}</ProductName>
        <div>
          <Rating
            value={rating}
            // onChange={(e) => setrating(e.value)}
            readonly={true}
            size="medium"
          />
        </div>
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
        {product?.hasChildProduct === true ? (
          <ProductButton>shop now</ProductButton>
        ) : (
          <ProductButton onClick={() => addToCart()}>add to cart</ProductButton>
        )}
      </ProductContent>
    </ProductCard>
  );
};

export default CommonProductCard;

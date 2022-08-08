import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowForward } from "react-icons/io";
////
import { NavHeader } from "./style";
import { setProductsId } from "../../store/products";
import Link from "next/link";

const RouteBar = ({ onDetailsPage }) => {
  const dispatch = useDispatch();
  const Router = useRouter();
  const previousId = useSelector((state) => state.products.productsId);
  let routeId = Router.query?.id;
  let routeString = Router.query?.product;
  console.log(routeString);
  useEffect(() => {
    if (routeId) {
      if (routeId === previousId) {
      } else {
        dispatch(setProductsId(routeId));
      }
    }
  }, [routeId]);
  return (
    <NavHeader>
      <Link href="/">
        <p>flying monkey </p>
      </Link>
      <span></span>
      {onDetailsPage && (
        <p onClick={() => Router.back()}>
          products <span></span>
        </p>
      )}

      {routeString}
    </NavHeader>
  );
};

export default RouteBar;

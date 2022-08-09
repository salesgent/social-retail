import { Skeleton } from "@mui/material";
import { ProductsGrid } from "../../product-list/style";

////////////////////////////////////////////////////////////////

import {
  ImageBox,
  ProductButton,
  ProductCard,
  ProductContent,
  ProductName,
  ProductPrice,
} from "../productCard.style";

const ProductCardSkeleton = () => {
  return (
    <ProductsGrid>
      {[1, 2, 3, 4].map((i) => (
        <ProductCard className="product-card" key={i}>
          <ImageBox>
            <Skeleton
              animation="wave"
              variant="rectangular"
              style={{ height: "100%" }}
            />
          </ImageBox>
          <ProductContent marginRight="4em">
            <span className="title">
              <Skeleton
                animation="wave"
                variant="text"
                height={30}
                width={140}
                // style={{ width: "180%" }}
              />
            </span>
            <ProductName>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={160}
                style={{ width: "21.65rem" }}
              />
            </ProductName>
            <ProductName>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={40}
                style={{ width: "60%" }}
              />
            </ProductName>
            <ProductName>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={80}
                style={{ width: "80%" }}
              />
            </ProductName>
            {/* <ProductName>
              <Skeleton
                animation="wave"
                variant="text"
                height={50}
                style={{ width: "70%" }}
              />
            </ProductName> */}
          </ProductContent>
        </ProductCard>
      ))}
    </ProductsGrid>
  );
};

export default ProductCardSkeleton;

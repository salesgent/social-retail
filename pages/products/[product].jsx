import React, { useState, useEffect } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useSelector } from "react-redux";
////////////////////////////////////////////////////////////////
import RouteBar from "../../src/components/product-list/RouteBar";
import {
  ProductsSection,
  ProductsHeader,
  ProductsContainer,
  ProductsGrid,
  ProductsNotFound,
} from "../../src/components/product-list/style";
import { useDatafetcher } from "../../src/utilities/hooks/useDatafetcher";
import InfiniteScroll from "react-infinite-scroll-component";
import CommonProductCard from "../../src/components/productCard/productCard";
import OfferBanner from "../../src/components/home/OfferBanner/OfferBanner";
import LeftSection from "../../src/components/product-list/leftSection/LeftSection";
import ProductCardSkeleton from "../../src/components/productCard/productCardSkeleton/ProductCardSkeleton";

const ProductsPage = () => {
  const productId = useSelector((state) => state.products.productsId);
  const [selectedId, setSelectedId] = useState(-1);
  const [page, setPage] = useState(0);
  const [firstLoading, setFirstLoading] = useState(true);
  const [pageable, setPageable] = useState(true);
  const [products, setProducts] = useState([]);

  const { data, error, loading } = useDatafetcher(
    `/ecommerce/product/category?categoryIdList=${productId}&page=${page}&size=18&sort=date&sortDirection=DESC&storeIds=1`,
    productId
  );
  //////fetching data and adding bg images
  useEffect(() => {
    if (data && data) {
      setFirstLoading(false);

      if (data.content.length > 0) {
        if (products.length > 0 && page > 0) {
          setProducts((products) => [...products, ...data.content]);
        } else {
          setProducts(data.content);
        }
      }
      if (data?.totalPages <= page) {
        setPageable(false);
      }
    }
  }, [data]);

  return (
    <ProductsSection>
      <OfferBanner />
      <RouteBar />
      <ProductsContainer>
        <LeftSection />
        {firstLoading ? (
          <ProductCardSkeleton />
        ) : (
          <>
            {products && products.length > 0 ? (
              <InfiniteScroll
                dataLength={products?.length}
                hasMore={pageable}
                loader={<ProductCardSkeleton />}
                next={() => {
                  setPage((page) => page + 1);
                }}
              >
                <ProductsGrid>
                  {products.map((product, i) => (
                    <CommonProductCard
                      product={product}
                      key={i}
                      setSelectedId={setSelectedId}
                      selectedId={selectedId}
                    />
                  ))}
                </ProductsGrid>
              </InfiniteScroll>
            ) : (
              <ProductsNotFound>products not found!</ProductsNotFound>
            )}
          </>
        )}
        {error && <ProductsNotFound>Something went wrong!</ProductsNotFound>}
      </ProductsContainer>
    </ProductsSection>
  );
};

export default ProductsPage;

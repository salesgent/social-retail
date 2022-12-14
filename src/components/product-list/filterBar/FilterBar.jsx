import React from "react";
import { FilterBarContainer, SelectBox } from "./FilterBar.style";
const FilterBar = ({
  setApiSorting,
  length,
  setPage,
  setPageable,
  setFirstLoading,
}) => {
  ////////filter products
  const filterProducts = (value) => {
    setFirstLoading(true);
    setPage(0);
    setPageable(true);
    // dispatch(toggleProductsNotFound(false));
    if (value === "1") {
      return;
    } else if (value === "2") {
      setApiSorting({ sort: "date", order: "ASC" });
    } else if (value === "3") {
      setApiSorting({ sort: "date", order: "DESC" });
    } else if (value === "4") {
      setApiSorting({ sort: "name", order: "ASC" });
    } else if (value === "5") {
      setApiSorting({ sort: "name", order: "DESC" });
    } else if (value === "6") {
      setApiSorting({ sort: "price", order: "ASC" });
    } else if (value === "7") {
      setApiSorting({ sort: "price", order: "DESC" });
    }
  };
  return (
    <FilterBarContainer>
      {length || 0} Displays
      <SelectBox>
        Sort by :
        <select
          onChange={(e) => {
            filterProducts(e.target.value);
          }}
        >
          <option tabIndex={0} value={"2"}>
            Default
          </option>

          <option tabIndex={0} value={"3"}>
            Date(Oldest - Latest){" "}
          </option>
          <option tabIndex={0} value={"2"}>
            Date(Latest - Oldest){" "}
          </option>
          <option tabIndex={0} value={"4"}>
            Name(A - Z)
          </option>
          <option tabIndex={0} value={"5"}>
            Name(Z - A)
          </option>
          <option tabIndex={0} value={"6"}>
            price(low - high)
          </option>
          <option tabIndex={0} value={"7"}>
            price(high - low )
          </option>
        </select>
      </SelectBox>
    </FilterBarContainer>
  );
};

export default FilterBar;

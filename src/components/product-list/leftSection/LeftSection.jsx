import { useState } from "react";
import { Checkbox, Slider, Stack } from "@mui/material";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
/////
import {
  DropContent,
  DropDownHeading,
  DropRow,
  Hr,
  LeftNavContainer,
} from "./leftSection.style";
import { useDatafetcher } from "../../../utilities/hooks/useDatafetcher";

const LeftSection = () => {
  const [showBrands, setShowBrands] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const { data, error } = useDatafetcher(
    "/brand?name=appl&page=0&size=2&sort=name&sortDirection=ASC"
  );

  return (
    <LeftNavContainer>
      <DropDownHeading>
        Brand{" "}
        <BsChevronDown
          className="icon"
          onClick={() => setShowBrands((open) => !open)}
          style={showBrands ? { transform: "rotate(0deg)" } : {}}
        />{" "}
      </DropDownHeading>
      {showBrands && (
        <DropContent flexDirection="column" alignItems="flex-start">
          {data &&
            data.content.map((brand, i) => (
              <DropRow alignItems="center" flexDirection="row" key={i}>
                <input type="checkbox" value={brand.id} />
                <h6>{brand.name}</h6>
              </DropRow>
            ))}
        </DropContent>
      )}
      <Hr />
      <DropDownHeading>
        price{" "}
        <BsChevronDown
          className="icon"
          onClick={() => setShowPrice((open) => !open)}
          style={showPrice ? { transform: "rotate(0deg)" } : {}}
        />{" "}
      </DropDownHeading>
      {showPrice && (
        <DropContent>
          <DropRow flexDirection="column" alignItems="flex-start">
            <Slider
              getAriaLabel={() => "Temperature"}
              orientation="horizontal"
              // getAriaValueText={valuetext}
              defaultValue={[50, 357]}
              valueLabelDisplay="auto"
              min={0}
              max={550}
              sx={{
                color: "#fbbe36",
                "& .MuiSlider-thumb": {
                  height: 40,
                  width: 40,
                },
                marginBottom: "2em",
              }}
              // marks={marks}
            />
            <p>Price :$0 - $550</p>
          </DropRow>
        </DropContent>
      )}
      <Hr />
      <DropDownHeading>
        colour <BsChevronDown className="icon" />{" "}
      </DropDownHeading>
      <DropContent></DropContent>
      <Hr />
      <DropDownHeading>
        discount <BsChevronDown className="icon" />{" "}
      </DropDownHeading>
      {/* <DropContent></DropContent> */}
    </LeftNavContainer>
  );
};

export default LeftSection;

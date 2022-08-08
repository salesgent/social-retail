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

const LeftSection = () => {
  const [showBrands, setShowBrands] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
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
          <DropRow alignItems="center" flexDirection="row">
            <input type="checkbox" defaultChecked />
            <h6>Disposable vape</h6>
          </DropRow>
          <DropRow alignItems="center" flexDirection="row">
            <input type="checkbox" checked={false} />
            <h6>Disposable vape</h6>
          </DropRow>
          <DropRow alignItems="center" flexDirection="row">
            <input type="checkbox" />
            <h6>Disposable vape</h6>
          </DropRow>
          <DropRow alignItems="center" flexDirection="row">
            <input type="checkbox" />
            <h6>Disposable vape</h6>
          </DropRow>
          <DropRow alignItems="center" flexDirection="row">
            <input type="checkbox" />
            <h6>Disposable vape</h6>
          </DropRow>
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

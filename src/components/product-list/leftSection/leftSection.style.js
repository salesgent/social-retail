import styled from "styled-components";
import { Stack } from "@mui/material";

export const LeftNavContainer = styled.div`
  width: 27.126rem;
  height: 61.8125rem;
  background: #b7e8d3;
  border-radius: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0em 2em;
  color: ${(props) => props.theme.palette.colors.other};
`;

export const DropDownHeading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.8em 0;
  .icon {
    transition: 0.2s;
    cursor: pointer;
    transform: rotate(-90deg);
  }
`;

export const DropContent = styled(Stack)`
  width: 100%;
`;

export const DropRow = styled(Stack)`
  width: 100%;
  padding-bottom: 1em;
  cursor: pointer;

  input {
    width: 0.95rem;
    height: 0.95rem;
    margin-right: 1em;
    accent-color: #fbbe36;
    color: white;
    border: 1px solid white !important;
    outline: none;
    cursor: pointer;
    &:hover,
    &:focus {
      color: white !important;
    }
  }
  h6 {
    font-size: 1.44rem;
    font-weight: 400;
    text-transform: uppercase;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.7rem;
    max-height: 1.8rem;
  }
`;

export const Hr = styled.hr`
  border: none;
  width: 100%;
  margin: 0.5em 0;
  background-color: black;
  height: 1px;
`;

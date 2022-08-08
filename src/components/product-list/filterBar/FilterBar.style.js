import styled from "styled-components";

export const FilterBarContainer = styled.div`
  width: 100%;
  font-size: 1.437rem;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.4em 1em;
  text-transform: capitalize;
  align-items: center;
`;
export const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  select {
    border: 1px solid #d4cdcd;
    width: 12.5rem;
    height: 2.56rem;
    border-radius: 4px;
    padding: 0.2em 0.6em;
    margin-left: 0.5em;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

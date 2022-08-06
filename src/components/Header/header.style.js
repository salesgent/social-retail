import styled from "styled-components";

export const HeaderSection = styled.div`
  width: 100%;
  background: ${(props) => props.theme.palette.bg.main};
  display: grid;
  place-items: center;
  min-height: 70px;
  height: 5.6rem;
  max-height: 8rem;
  overflow: hidden;
`;
export const HeaderContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth.home};
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;

  @media screen and (max-width: 748px) {
    .side-space {
      width: 0;
      display: none;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  justify-self: flex-end;
  span {
    cursor: pointer;
  }
  /* @media screen and (max-width: 748px) {
    margin-right: -10px;
    width: 140px;
  } */
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  margin: ${(props) => props.margin || "0"};
  @media screen and (max-width: 1089px) {
    width: 24px;
    height: 24px;
  }
  @media screen and (max-width: 748px) {
    width: 24px;
    height: 24px;
  }
`;

export const LogoContainer = styled.div`
  width: 9.81rem;
  height: 4.55rem;
  cursor: pointer;
  position: relative;
`;
export const HeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  @media only screen and (max-width: 2030px) {
    display: none;
  }
`;

export const HeaderLink = styled.a`
  font-weight: 800;
  font-family: "Qanelas";
  color: ${(props) => props.theme.palette.colors.main};
  font-size: 1.1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: max-content;
  .icon {
    margin-left: 0.5rem;
  }
  &:hover {
    opacity: 0.8;
  }
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

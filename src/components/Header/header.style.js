import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  min-height:110px;
  height: 7vw;
  max-height:8rem;
  background: ${(props) => props.theme.palette.bg.main};
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  @media screen and (max-width: 1089px) {
    min-height: 204px;
    height: 204px;
  }
  @media screen and (max-width: 748px) {
    padding: 0 4%;
    min-height: 114px;
    height: 114px;
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
  width: 180px;
  /* background:#FF0000; */
   span {
    cursor: pointer;
  }
  @media screen and (max-width: 748px) {
    margin-right: -10px;
    width: 140px;
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  @media screen and (max-width: 1089px) {
    width: 24px;
    height: 24px;
  }
  @media screen and (max-width: 748px) {
    width: 24px;
    height: 24px;
  }
`;

export const MenuIcon = styled.div`
  width: ${(props) => props.width || "66px"};
  height: ${(props) => props.height || "66px"};
  background: white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 46px;
  justify-self: flex-end;
  cursor: pointer;
  margin-left: ${(props) => props.marginLeft};
  @media screen and (max-width: 1089px) {
    width: 54px;
    height: 54px;
    font-size: 26px;
  }
`;

export const LogoContainer = styled.div`
  width: 403px;
  height: 114px;
  cursor: pointer;
  position: relative;
  @media screen and (max-width: 1440px) {
    width: 325px;
    height: 104px;
  }
  @media screen and (max-width: 1089px) {
    width: 285px;
    height: 85px;
  }
  @media screen and (max-width: 748px) {
    width: 205px;
    height: 62px;
  }
`;

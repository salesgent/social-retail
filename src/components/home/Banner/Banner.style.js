import styled from "styled-components";

export const BannerSection = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  margin-bottom: 6em;
  margin-top: 2em;
`;

export const BannerContainer = styled.div`
  width: 100%;
  /* height: 42.187rem; */
  /* max-width: ${(props) => props.theme.maxWidth.home}; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const BannerBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => props.placeItems || "flex-end"};
  height: 58.737rem;
`;

export const BannerImg = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  height: 100%;
  /* position: relative; */
  color: white;
  padding: 2.5em;
  /* padding-top: 6em; */
  padding-bottom: 0;
  position: relative;
  h3 {
    font-size: 3.25rem;
    font-weight: 700;
    z-index: 1;
  }
  P {
    font-size: 1.812rem;
    font-weight: 400;
    line-height: 3rem;
    margin: 2em 0;
    z-index: 1;
  }
  .bg {
    width: 100%;
    height: 42.187rem;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    background: ${(props) => props.bg || props.theme.palette.bg.secondary};
  }
`;

export const BannerButton = styled.button`
  width: ${(props) => props.width || "42rem"};
  height: 7.125rem;
  display: grid;
  place-items: center;
  font-weight: 700;
  color: ${(props) => props.theme.palette.colors.secondary};
  background-color: #ffc403;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 2.2rem;
  margin: 0 1rem;
`;

export const ImgBox = styled.div`
  width: 49.6rem;
  max-width: 100%;
  min-height: 49rem;
  position: relative;
  margin-top: auto;
  /* margin-top: 6rem; */
`;

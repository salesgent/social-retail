import styled from "styled-components";
import { Button, Typography } from "@mui/material";

export const H1 = styled(Typography)`
  font-size: ${(props) => props.fontSize || props.theme.typography.h1.fontSize};
  font-weight: ${(props) => props.theme.typography.h1.fontWeight};
  color: ${(props) => props.theme.palette.colors.secondary};
  text-transform: uppercase;
  font-family: ${(props) =>
    props.fontFamily || props.theme.typography.h1.fontFamily};
  margin: ${(props) => props.margin || ".8rem 0"};
  letter-spacing: 0.05em;
  @media only screen and (max-width: 768px) {
    word-break: break-word;
    font-size: ${(props) => props.theme.typography.h1.fontSizeSm};
  }
`;
export const FooterHeading = styled(Typography)`
  font-size: ${(props) => props.fontSize || props.theme.typography.h2.fontSize};
  font-weight: ${(props) => props.theme.typography.h2.fontWeight};
  color: ${(props) => props.theme.palette.colors.main};
  text-transform: uppercase;
  font-family: ${(props) =>
    props.fontFamily || props.theme.typography.h2.fontFamily};
  margin: ${(props) => props.margin || ".8rem 0"};
  @media only screen and (max-width: 768px) {
    word-break: break-word;
    font-size: ${(props) => props.theme.typography.h2.fontSizeSm};
  }
`;

export const BodyText = styled(Typography)`
  font-size: ${(props) =>
    props.fontSize || props.theme.typography.body.fontSize};
  font-weight: ${(props) => props.theme.typography.body.fontWeight};
  color: ${(props) => props.theme.palette.colors.main};
  margin: 0.8rem 0;
  margin-bottom: ${(props) => props.marginBottom || ".8rem"};
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  @media only screen and (max-width: 768px) {
    word-break: break-word;
    font-size: ${(props) => props.theme.typography.body.fontSizeSm};
  }
`;

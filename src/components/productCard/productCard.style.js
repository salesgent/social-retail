import styled from "styled-components";
import { motion } from "framer-motion";
export const ProductCard = styled.div`
  max-width: 35.685rem;
  max-height: 17.46rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  overflow: hidden;
  transition: all 0.6s;
  background-color: white;
  color: black;
  text-transform: capitalize;
  font-family: "Jost-fonts";
`;
export const ImageBox = styled.div`
  min-width: 11.1rem;
  position: relative;
  min-height: 17.5rem;
  max-height: 100%;
  max-width: 40%;
`;
export const ProductContent = styled.div`
  /* width: 60%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  padding: 1em;
  padding-right: 0;
  max-width: 60%;
  margin-right: ${(props) => props.marginRight};
  .title {
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 100%;
  }
  @media screen and (max-width: 1635px) {
    margin-right: 0;
  }
`;

export const ProductName = styled.h4`
  font-weight: 700;
  font-size: 1.95rem;
  min-width: 12ch;
  margin: 0.5em 0;
  margin-top: 0.3rem;
  letter-spacing: 0.02em;
  line-height: 2.1rem;
  min-height: 4.295rem;
  max-height: 4.32rem;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 640px) {
    min-width: 10ch;
    max-width: 14ch;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 1.2em 0;
  margin-bottom: 1.5rem;
  p {
    font-size: 2.1rem;
    font-weight: 700;
    color: black;
    line-height: 2rem;
  }
  span {
    font-size: 1.45rem;
    color: #656363;
    text-decoration: line-through;
    margin-right: 0.5em;
    /* line-height: 2.4rem; */
  }
`;

export const Button = styled(motion.button)`
  border: none;
  background: #ffc403;
  padding: 0.6em 1em;
  border-radius: 2.5rem;
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 1rem;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    border: none;
  }
  @media screen and (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

export const ProductButton = ({ children, ...props }) => {
  return (
    <Button
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      {...props}
    >
      {" "}
      {children}
    </Button>
  );
};

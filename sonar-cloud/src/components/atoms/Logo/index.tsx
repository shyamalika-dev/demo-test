import React from "react";
import styled from "styled-components";
const StyledLogo = styled.img`
  width: 50px;
  height: 50px;
`;
interface LogoProps {
  src: string;
  alt: string;
}
const Logo = ({ src, alt }: LogoProps) => {
  return <StyledLogo src={src} alt={alt}></StyledLogo>;
};

export default Logo;

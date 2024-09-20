import React from "react";
import styled from "styled-components";
import { Card } from "@mui/material";
import CustomTypography from "../../atoms/CustomTypography";
import Logo from "../../atoms/Logo/index";
const StyledCard = styled(Card)`
  width: 300px;
  height: 100px;
  border: 2px solid grey;
`;
const FinalCard = () => {
  return (
    <StyledCard>
      <CustomTypography variant="body1" Text="Hello iam shyamalika" />
      <Logo src="logo192.png" alt="alternative logo text" />
    </StyledCard>
  );
};
export default FinalCard;

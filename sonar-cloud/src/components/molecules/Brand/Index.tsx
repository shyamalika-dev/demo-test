import React from "react";
import { Box } from "@mui/material";
import Logo from "../../atoms/Logo/Index";
import Text from "../../atoms/Text/Index";

const Brand: React.FC = () => (
  <Box data-testid="brand" sx={{ display: "flex", alignItems: "center" }}>
    <Logo src="/assests/Images/icon.svg" alt="Seeder Logo" />
    <Text text="Seeder" fontSize="24px" />
  </Box>
);

export default Brand;

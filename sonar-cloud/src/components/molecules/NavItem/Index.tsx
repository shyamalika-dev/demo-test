import React from "react";
import { Box } from "@mui/material";
import Logo from "../../atoms/Logo/Index";
import Text from "../../atoms/Text/Index";

interface NavProps {
  label: string;
  iconSrc: string;
  onClick: () => void;
  isActive?: boolean;
  "data-testid"?: string;
}

const NavItem: React.FC<NavProps> = ({
  label,
  iconSrc,
  onClick,
  isActive = false,
  "data-testid": testId,
}) => (
  <Box
    data-testid={testId}
    onClick={onClick}
    sx={{
      display: "flex",
      alignItems: "center",
      padding: 0.3,
      marginBottom: 1,
      marginRight: 0.2,
      backgroundColor: isActive ? "#333" : "transparent",
      width: 225,
      borderRadius: 1,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#444",
      },
    }}
  >
    <Logo src={iconSrc} alt={label} />
    <Text text={label} />
  </Box>
);

export default NavItem;

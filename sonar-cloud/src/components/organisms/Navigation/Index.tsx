import React, { useState } from "react";
import { Box } from "@mui/material";
import NavItem from "../../molecules/NavItem/Index";

const Navigation: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <nav data-testid="navigation">
      <Box
        sx={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          position: "absolute",
          top: 100,
        }}
      >
        <Box component="li" sx={{ marginBottom: 1 }}>
          <NavItem
            iconSrc="./assests/Images/home-2.svg"
            label="Home"
            onClick={() => handleItemClick("Home")}
            isActive={activeItem === "Home"}
            data-testid="nav-item-home" // Passing the data-testid here
          />
        </Box>
        <Box component="li" sx={{ marginBottom: 1 }}>
          <NavItem
            iconSrc="./assests/Images/coin.svg"
            label="Acceleration"
            onClick={() => handleItemClick("Acceleration")}
            isActive={activeItem === "Acceleration"}
            data-testid="nav-item-acceleration" // Passing the data-testid here
          />
        </Box>
      </Box>
    </nav>
  );
};

export default Navigation;

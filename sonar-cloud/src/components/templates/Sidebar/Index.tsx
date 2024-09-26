import React from "react";
import { Box } from "@mui/material";

interface SidebarProps {
  brandComponent: React.ReactNode;
  navigationComponent: React.ReactNode;
  footerComponent: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
  brandComponent,
  navigationComponent,
  footerComponent,
}) => (
  <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
    {brandComponent}
    {navigationComponent}
    {footerComponent}
  </Box>
);

export default Sidebar;

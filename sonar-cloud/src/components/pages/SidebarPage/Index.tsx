import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../../templates/Sidebar/Index";
import Brand from "../../molecules/Brand/Index";
import Navigation from "../../organisms/Navigation/Index";
import Footer from "../../organisms/Footer/Index";

const SidebarPage: React.FC = () => (
  <Box sx={{ display: "flex", height: "100vh" }}>
    <Box
      sx={{
        width: 250,
        backgroundColor: "#1a1a1a",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Sidebar
        brandComponent={<Brand />}
        navigationComponent={<Navigation />}
        footerComponent={<Footer />}
      />
    </Box>
  </Box>
);

export default SidebarPage;

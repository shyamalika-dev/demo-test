/*import React from 'react';
import { Box } from '@mui/material';
import Logo from '../../atoms/Logo/Logo';
import Text from '../../atoms/Text/Text';

const FooterItem: React.FC = () => (
  <Box sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    position: 'absolute', 
    bottom: 20, 
    left: 40, 
    color: '#fff' 
  }}>
    <Logo src="/assests/Images/flash.svg" alt="watch how to" />
    <Text text="watch how to" />
  </Box>
);

export default FooterItem;*/
// FooterItem.tsx
import React from "react";
import { Box } from "@mui/material";
import Logo from "../../atoms/Logo/Index";
import Text from "../../atoms/Text/Index";

const FooterItem: React.FC = () => (
  <Box
    data-testid="footer"
    sx={{
      display: "flex",
      alignItems: "center",
      position: "absolute",
      bottom: 20,
      left: 40,
      color: "#fff",
    }}
  >
    <Logo src="/assests/Images/flash.svg" alt="watch how to" />
    <Text text="watch how to" />
  </Box>
);

export default FooterItem;

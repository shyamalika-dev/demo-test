// import React from 'react';
// import { Typography } from '@mui/material';
// import styled from 'styled-components';
// import { useTheme } from '@mui/material/styles';

// const StyledTypography = styled(Typography)<{ fontSize?: string }>`
//   color: ${({ theme }) => theme.palette.text.primary};
//   font-size: ${({ fontSize, theme }) => fontSize || theme.typography.body1.fontSize};
//   font-family: ${({ theme }) => theme.typography.fontFamily};
// `;

// interface TextProps {
//   text: string;
//   fontSize?: string;
// }

// const Text: React.FC<TextProps> = ({ text, fontSize }) => {
//   const theme = useTheme();

//   return (
//     <StyledTypography fontSize={fontSize} theme={theme}>
//       {text}
//     </StyledTypography>
//   );
// };

// export default Text;

import React from "react";
import styled from "styled-components";
const colors = {
  primary: "#1976d2",
  secondary: "#dc004e",
  background: "#1a1a1a",
  textPrimary: "#fff",
  textSecondary: "#bdbdbd",
};

const fonts = {
  fontFamily: "Gilroy, sans-serif",
  fontSize: "16px",
};

const StyledTypography = styled.p<{ fontSize?: string; color?: string }>`
  color: ${({ color }) => color || colors.textPrimary};
  font-size: ${({ fontSize }) => fontSize || fonts.fontSize};
  font-family: ${fonts.fontFamily};
`;

interface TextProps {
  text: string;
  fontSize?: string;
  color?: string;
}

const Text: React.FC<TextProps> = ({ text, fontSize, color }) => {
  return (
    <StyledTypography fontSize={fontSize} color={color}>
      {text}
    </StyledTypography>
  );
};

export default Text;

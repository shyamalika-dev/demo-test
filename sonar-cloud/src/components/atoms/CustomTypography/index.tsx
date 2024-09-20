import React from "react";
import { Typography } from "@mui/material";
interface TypographyProps {
  variant?: "h1" | "body1" | "body2" | "h5" | "h4";
  Text: string;
}
const CustomTypography = ({ variant, Text }: TypographyProps) => {
  return <Typography variant={variant}>{Text}</Typography>;
};
export default CustomTypography;

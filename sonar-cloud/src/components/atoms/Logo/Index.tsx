
/*import React from 'react';
import { Box } from '@mui/material';

interface LogoProps {
  src: string;
  alt: string;
}

const Logo = ({ src, alt }:LogoProps) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    sx={{
      width: 24,
      height: 24,
      marginRight: 1, 
    }}
  />
);

export default Logo;*/

import React from 'react';
import { Box } from '@mui/material';

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: 24,
        height: 24,
        marginRight: 1,
        borderRadius: '8px',
         
      }}
    />
  );
};

export default Logo;


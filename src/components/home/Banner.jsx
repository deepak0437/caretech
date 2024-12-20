import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Home } from '@mui/icons-material';


function Banner() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '200px',
        background: 'linear-gradient(to right, #4caf50, white)',
        display: 'flex',
        justifyContent: 'flex-start', // Align items to the left
        alignItems: 'center', // Align vertically in the center
        color: 'white',
        padding: { xs: '0 10px', sm: '0 20px', md: '0 40px' }, // Dynamic padding based on screen size
      }}
    >
      <Grid container sx={{ width: '100%' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Welcome to the Home Page!
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            Your journey to success starts here.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Home sx={{ fontSize: 50 , display: { xs: 'none', lg: 'block' }, color: 'black' }} />
          {/* The icon will be hidden on smaller screens (xs) and visible on larger screens (md and above) */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Banner;

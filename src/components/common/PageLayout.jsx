import React from 'react';
import Container from '@mui/material/Container';
import RouteTracker from './RouteTracker';
import { Box } from '@mui/material';



function PageLayout({ children }) {
  return (

    // <Container maxWidth="lg" sx={{px:10}}>
    //     <RouteTracker/>
    //     { children }
    //   </Container>
    // <Grid sx={{ xs: 6, md: 8 }}>
    //     { children }
    // </Grid>
    <Box sx={{
      py: { xs: 2, sm: 3, md: 5 },  // Adjusting vertical padding dynamically
      px: { xs: 2, sm: 5, md: 10 }  // Adjusting horizontal padding dynamically
    }}>
      <RouteTracker />
      
      {children}
    </Box>
  )
}

export default PageLayout
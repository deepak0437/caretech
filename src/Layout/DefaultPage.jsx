import React from 'react'
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import AppLayout from './AppLayout';

function DefaultPage({ children }) {
  return (
      <>


        <Box sx={{py:1, px:10}}>
        { children }
        </Box>
        </>

  )
}

DefaultPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultPage
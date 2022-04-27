import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



import ResponsiveAppBar from './AppBarComponent'; 
import TabGroup from './TabGroup';
import TableContainer from './TableContainer';


import ChartStack from './ChartStack';


export default function OverviewGroup() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xxl'>
        <Box sx={{ bgcolor: '#3487df', height: 450 }}>
        <div><h2><font color="white">Weekly Overview</font></h2></div>
        
    <p><div><ChartStack/></div></p>
    {/* 3874CB */}

        </Box>
        
    

      </Container>
    </React.Fragment>
  );
}

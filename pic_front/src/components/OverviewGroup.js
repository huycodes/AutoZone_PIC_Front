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
        <Box sx={{ marginTop:3, bgcolor: '#3487df', height: 410, Opacity:1, border:0, borderColor:'#3874CB', borderRadius:1.8 }}>
        <div><h3><font color="white">Weekly Overview</font></h3></div>
        <div><ChartStack/></div>
    {/* 3874CB 
    3487df*/}
        </Box>
      </Container>
    </React.Fragment>
  );
}

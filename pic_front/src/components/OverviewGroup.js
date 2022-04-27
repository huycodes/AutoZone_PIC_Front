import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



import ResponsiveAppBar from './AppBarComponent'; 
import TabGroup from './TabGroup';
import TableContainer from './TableContainer';
import ExportButtonComponent from './ExportButtonComponent';

import ChartStack from './ChartStack';


export default function OverviewGroup() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Box sx={{ bgcolor: '#cfe8fc', height: '55vh' }}>
        <div><h1><font color="black">Weekly Overview</font></h1></div>
    
    {/* <div><ChartComponent type='pies'/></div>
    <div><ChartComponent type='aces'/></div> */}
    
    <p><div><ChartStack/></div></p>
    

        </Box>
        
    

      </Container>
    </React.Fragment>
  );
}

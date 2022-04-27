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
      <Container maxWidth='xxl'>
        <Box sx={{ bgcolor: '#adcae6', height: 450 }}>
        <div><h2><font color="3874CB">Weekly Overview</font></h2></div>
        
    <p><div><ChartStack/></div></p>
   

        </Box>
        
    

      </Container>
    </React.Fragment>
  );
}

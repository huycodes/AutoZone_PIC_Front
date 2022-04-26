import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ChartComponent from './ChartComponent';

export default function ChartGroup() {
  return (
    <div>
        <React.Fragment>
        
        <CssBaseline />
        <Container maxWidth="100vh" centered>
        
        <Box sx={{ bgcolor: '#FFFFFF', height: '30vh' }}>
            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}} class="flexbox-container" flex-direction="row" >
            <div><ChartComponent/></div>
            <div><ChartComponent/></div>
            <div><ChartComponent/></div>
            </div> 
        </Box>
    
        </Container>
        
        </React.Fragment>
  </div>
    

    
  );
}

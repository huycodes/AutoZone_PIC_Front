import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TableComponent from './TableComponent';

export default function TableContainer() {
  return (
    
    <div>
    <React.Fragment>
      
      <CssBaseline />
      
      <Container maxWidth="1000vh" centered>
      <br></br> <br></br>
        <Box sx={{  color:"blue" }} >
        <TableComponent/>
        </Box>
        
      </Container>
      
    </React.Fragment>
    </div>
  );
}

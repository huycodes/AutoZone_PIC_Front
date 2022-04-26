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
      <Container maxWidth="100vh" centered>
        <Box sx={{ bgcolor: '#FFFFFF', height: '30vh' }}>
        <TableComponent/>
        </Box>
        
      </Container>
    </React.Fragment>
    </div>
  );
}

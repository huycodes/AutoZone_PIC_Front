import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ColumnGroupingTable from './TableComponent';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100vh" centered>
        <Box sx={{ bgcolor: '#FFFFFF', height: '30vh' }}>
        <ColumnGroupingTable/>
        </Box>
        
      </Container>
    </React.Fragment>
  );
}

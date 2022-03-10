import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" centered>
        <Box sx={{ bgcolor: '#FFFFFF', height: '30vh' }} />
      </Container>
    </React.Fragment>
  );
}

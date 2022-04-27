import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Last 3 days</Button>
      <Button>Last weeks</Button>
      <Button>Last 2 weeks</Button>
      <Button>Last month</Button>
    </ButtonGroup>
  );
}

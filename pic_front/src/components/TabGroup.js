import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import ShareButton from './ShareButton';
import CustomRangeButton from './CustomRangeButton';

export default function TabGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="contained" aria-label="outlined button group">
        <Button>Last week</Button>
        <Button>Last 2 weeks</Button>
        <Button>Last month</Button>
        <Button>Custom Range</Button>
        <ShareButton name="Export"/>
      </ButtonGroup>

    </Box>
  );
}

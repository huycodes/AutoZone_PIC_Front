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
      <ButtonGroup variant="contained" aria-label="outlined button group"color="warning">
        <Button color="warning">Last week</Button>
        <Button color="warning">Last 2 weeks</Button>
        <Button color="warning">Last month</Button>
        <Button color="warning">Custom Range</Button>
        <ShareButton name="Export"/>
      </ButtonGroup>

    </Box>
  );
}

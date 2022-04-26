import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ChartComponent from './ChartComponent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ChartStack() {
  return (
    <div>
      <Stack direction="row" spacing={2} centered>
        <div><ChartComponent/></div>
        <div><ChartComponent/></div>
        <div><ChartComponent/></div>
      </Stack>

    </div>
  );
}

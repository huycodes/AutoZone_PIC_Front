import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IosShareIcon from '@mui/icons-material/IosShare';
export default function ShareButton(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" size="medium"><IosShareIcon/>{props.name}</Button>
    </Stack>
  );
}

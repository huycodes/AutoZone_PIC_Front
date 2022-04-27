import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import TabGroup from './TabGroup';
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  height: 20,
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function ButtonGroupWithDivider() {
  const content = (
    <div>
  
    </div>
  );

  return (
    <Root>
      {content}
      <p><Divider><TabGroup/></Divider></p>
      {/* {content}
      <Divider textAlign="left">LEFT</Divider>
      {content}
      <Divider textAlign="right">RIGHT</Divider>
      {content}
      <Divider>
        <Chip label="CHIP" />
      </Divider>
      {content} */}

    </Root>
  );
}

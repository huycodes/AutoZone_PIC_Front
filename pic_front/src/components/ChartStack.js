import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ProductChart from './ProductChart';
import CatalogNoteChart from './CatalogNoteChart';
import CatalogApplicationChart from './CatalogApplicationChart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ChartStack(props) {
  return (
    <div>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
    
        <Item><div><ProductChart/><h3><font color="3874CB">Products</font></h3></div></Item>
        <Item><div><CatalogNoteChart/><h3><font color="3874CB">Catalog Notes</font></h3></div></Item>
        <Item><div><CatalogApplicationChart/><h3><font color="3874CB">Catalog Applications</font></h3></div></Item>

      </Stack>

    </div>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import ImportExportIcon from '@mui/icons-material/ImportExport';

export default function ExportButtonComponent() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      {/* <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab> */}
      <Fab variant="extended">
        <ImportExportIcon sx={{ mr: 1 }} />
        Export
      </Fab>
      {/* <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab> */}
    </Box>
  );
}

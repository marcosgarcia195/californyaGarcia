import React, {useState, useEffect, useContext} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({descripcion,tipo}) {

    const [open, setOpen] = React.useState(false);

    useEffect(() => {

        if (descripcion){
            setOpen(true);
        }
        
        }, [descripcion]);

 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={null} onClose={handleClose}>
        <Alert onClose={handleClose} severity={tipo} sx={{ width: '100%' }}>
          {descripcion}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
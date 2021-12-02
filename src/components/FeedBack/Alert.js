import React, {useState, useEffect} from 'react';
import {Stack, Snackbar, Alert} from '@mui/material';


const MAlert = React.forwardRef(function MAlert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({description,tipo}) {

    const [open, setOpen] = useState(false);

    useEffect(() => {

        if (description){
            setOpen(true);
        }
        
        }, [description]);

 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={null} onClose={handleClose}>
        <MAlert onClose={handleClose} severity={tipo} sx={{ width: '100%' }}>
          {description}
        </MAlert>
      </Snackbar>
    </Stack>
  );
}
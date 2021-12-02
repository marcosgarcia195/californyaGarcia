import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';

export default function NotFound() {

  return (
        
    <Container maxWidth="m">
      <br/>
      <Grid container>       
      <Grid item xs={2}>              
        </Grid>
        <Grid item xs={8}>
        <br/>     
        <Typography variant="h4">Esta pagina no existe</Typography>
        </Grid>        
      </Grid>
      
    </Container>
  );
}

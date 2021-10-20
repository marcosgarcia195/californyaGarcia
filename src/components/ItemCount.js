import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


export default function ItemCount({name,stock, initial}) {

    const [currentStock, setCurrentStock] = useState(stock);
    const [added, setAdded] = useState(initial);

    function onDecrease(){

        if (added != 0){
            setAdded(added - 1);
        }
        
    }

    function onAdd(){

        if (added < currentStock){
            setAdded(added + 1);
        }

    }

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
              $4.50
            </Typography>
          </Grid>
        </Grid>

        <Divider variant="middle" style={{paddingTop:1}}/>
        <Typography gutterBottom variant="h7" component="div">
              stock: {currentStock}
            </Typography>
        <br></br>
              
        <Divider variant="middle"/>
        <Grid container spacing={0} style={{paddingTop:8}}>
            <Grid item xs={2}>              
            </Grid>
            <Grid item xs={8} item textAlign='center'>
                <ButtonGroup variant='outlined' style={{padding: '0px'}} fullWidth>
                    <Button onClick={ () => {onDecrease()}}>-</Button>
                    <Button>{added}</Button>
                    <Button onClick={ () => {onAdd()}}>+</Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={2}>                
            </Grid>
        </Grid>
        <Grid container spacing={0} style={{paddingTop:4}}>
            <Grid item xs={2}>              
            </Grid>
            <Grid item xs={8} item textAlign='center'>
                <Button variant='contained' fullWidth onClick={() => {alert('Agregado al carro ' + added + ' unidades')}}>Agregar</Button>
            </Grid>
            <Grid item xs={2}>                
            </Grid>
        </Grid> 
      </Box>
    </Box>
  );
}
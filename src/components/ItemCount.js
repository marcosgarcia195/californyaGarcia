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


export default function ItemCount({aumentar, disminuir, cantidad}) {


  return (
        <Grid container>
        <Grid container style={{paddingTop:6}}>
            <Grid container alignItems="center">
                <ButtonGroup variant='outlined' style={{padding: '0px'}} fullWidth>
                    <Button onClick={ () => {disminuir()}}>-</Button>
                    <Button>{cantidad}</Button>
                    <Button onClick={ () => {aumentar()}}>+</Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={2}>                
            </Grid>
        </Grid>
        <Grid container style={{paddingTop:6}}>
            <Grid container alignItems='center'>
                <Button variant='contained' fullWidth onClick={() => {alert('Agregado al carro ' + cantidad + ' unidades')}}>Agregar</Button>
            </Grid>
        </Grid> 
        </Grid>
  );
}
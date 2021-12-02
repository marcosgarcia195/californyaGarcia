import React from 'react';
import {Grid, Button, ButtonGroup} from '@mui/material';

export default function ItemCount({increase, decrease, quantity, addItem}) {

  return (

        <Grid container>
            <Grid item xs={12} style={{paddingTop:6}}>
                <ButtonGroup variant='outlined' style={{padding: '0px'}} fullWidth>
                    <Button onClick={ () => {decrease()}}>-</Button>
                    <Button>{quantity}</Button>
                    <Button onClick={ () => {increase()}}>+</Button>
                </ButtonGroup>                
            </Grid>
            <Grid item xs={12} style={{paddingTop:6}}>
                <Button variant='contained' fullWidth onClick={addItem}>Agregar</Button>
            </Grid>
        </Grid>
  );
}
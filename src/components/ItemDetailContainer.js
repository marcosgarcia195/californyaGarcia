import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';
import {bebidas} from '../data/bebidas.js';
import ItemDetail from './ItemDetail.js'



export default function ItemDetailContainer({}) {
  
    const [currentBebida, setCurrentBebida] = useState()

     /*

    const getItem = new Promise((resolve,reject) => {
    
        setTimeout(() => {
            resolve(bebidas);
        },2000);
    });

    React.useEffect(() => {

         getItem()

    }, []);

    getItem.then((result) => {

        setCurrentBebida(result[0]);

    })

    */

    const getItem = new Promise((resolve,reject) => {
    
        setTimeout(() => {
            resolve(bebidas[0]);
        },2000);
    });

    getItem.then((result) => {

        setCurrentBebida(result);

    })
    

  return (
        
    <Container maxWidth="m">
      <Grid container alignItems="center">      
        <Grid item xs={4}>              
        </Grid>
        <Grid item xs={4}>     
            <ItemDetail item={currentBebida}/>
        </Grid>
      </Grid>
      
    </Container>
  );
}

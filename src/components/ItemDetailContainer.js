import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';
import {bebidas} from '../data/bebidas.js';
import ItemDetail from './ItemDetail.js'
import { useParams } from 'react-router';



export default function ItemDetailContainer() {
  
    const { id } = useParams();
    const [currentBebida, setCurrentBebida] = useState({});
    const [currentCantidad, setCurrentCantidad] = useState(0);
    

    React.useEffect(() => {

      const getItem = new Promise((resolve,reject) => {
    
        setTimeout(() => {
            resolve(bebidas);
        },2000);
      });

      getItem.then((result) => {

        if (result[id]){
          setCurrentBebida(result[id]);
        }
      
      });

    }, [id]);



  return (

    <Container maxWidth="m">
      <br/>
      <Grid container alignItems="center">      
        <Grid item xs={2}>              
        </Grid>
        <Grid item xs={8} style={{display: "flex",alignItem: "center", justifyContent: "center"}}>     
            <ItemDetail item={currentBebida} cantidad={currentCantidad} setCantidad={setCurrentCantidad}/>
        </Grid>
      </Grid>
      
    </Container>
  );
}

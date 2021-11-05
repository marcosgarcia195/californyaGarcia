import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router';
import { CartContext } from '../context/CartContext.js';
import {bebidas} from '../data/bebidas.js';
import ItemDetail from './ItemDetail.js'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


export default function ItemDetailContainer() {
  
    const { id } = useParams();
    const { addItem,removeItem } = useContext(CartContext);
    const [currentBebida, setCurrentBebida] = useState({});
    const [currentCantidad, setCurrentCantidad] = useState(0);

    useEffect(() => {

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

    const handleDecItem = () => {

      const item = {
        item: {
          id: 1
        },
        quantity: 0
      }

      removeItem(item);

    }

    const handleAddItem = () => {

      const item = {
        item: {
          id: currentBebida['id']
        },
        quantity: currentCantidad
      }

      addItem(item);

    }

    function onDecrease(){

      if (currentCantidad !== 0){
          setCurrentCantidad(currentCantidad - 1);
      }
      
    }
  
    function onAdd(){
  
          setCurrentCantidad(currentCantidad + 1);
    }


  return (

    <Container maxWidth="m">
      <br/>
      <Grid container alignItems="center">      
        <Grid item xs={2}>              
        </Grid>
        <Grid item xs={8} style={{display: "flex",alignItem: "center", justifyContent: "center"}}>     
            <ItemDetail item={currentBebida} cantidad={currentCantidad} disminuir={onDecrease} aumentar={onAdd} agregar={handleAddItem}/>
        </Grid>
      </Grid>
    </Container>
  );
}

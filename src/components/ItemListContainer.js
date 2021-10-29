import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {bebidas} from '../data/bebidas.js';
import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';
import { useParams } from 'react-router';

const greetingStyle = {
  color: 'darkblue',
  fontSize: 22 ,
};

export default function ItemListContainer({greeting}) {

  const { category } = useParams();
  const [currentBebidas, setCurrentBebidas] = useState([]);


  React.useEffect(() => {

    const getItem = new Promise((resolve,reject) => {
  
      setTimeout(() => {
          resolve(bebidas);
      },2000);
    });

    getItem.then((result) => {

      if (!category){
        setCurrentBebidas(result);
      }
      else{

        switch (category) {

          case "conalcohol":
            
            setCurrentBebidas([bebidas[0],bebidas[1],bebidas[2]]);

            break;
          
          case "sinalcohol":
            
            setCurrentBebidas([bebidas[3]]);

            break;

          default:
            
            break;
        }

      }
    
    });

  }, [category]);

  return (
        
    <Container maxWidth="m">
      <br/>
      <Grid container>          
            <ItemList items={currentBebidas}/>
      </Grid>
      
    </Container>
  );
}

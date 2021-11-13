import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '../firebase/index';
import {Container, Grid, Box} from '@mui/material';
import ItemList from './ItemList.js';
//import Container from '@mui/material/Container';
//import Grid from '@mui/material/Grid';
//import Box from '@mui/material/Box';
//import {bebidas} from '../data/bebidas.js';



export default function ItemListContainer({greeting}) {

  const { category } = useParams();
  const [currentBebidas, setCurrentBebidas] = useState([]);


  /*useEffect(() => {

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

  }, [category]);*/

  useEffect(() => {
    
    const dbase = getFirestore();
    const bebidas = dbase.collection('Bebidas');

    bebidas.get().then(resultado => {

      if (resultado){
    
        setCurrentBebidas(resultado.docs.map(bebida => ({

            id : bebida.id,
            ...bebida.data()
        })));
      }
    });
  
  }, [])

  return (
        
    <Container maxWidth="m">
      <br/>
      <Grid container>          
            <ItemList items={currentBebidas}/>
      </Grid>
      
    </Container>
  );
}

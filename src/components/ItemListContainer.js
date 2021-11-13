import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {getFirestore} from '../firebase/index';
import {Container, Grid, Box, Typography, CircularProgress} from '@mui/material';
import ItemList from './ItemList.js';


export default function ItemListContainer({greeting}) {

  const { category } = useParams();
  const [currentBebidas, setCurrentBebidas] = useState([]);
  
  useEffect(() => {
    
    const dbase = getFirestore();
    let bebidas = [];
    
    if (category){
      bebidas = dbase.collection('Bebidas').where('categoryId','==',category);
    }
    else{
      bebidas = dbase.collection('Bebidas');
    }
    

    bebidas.get().then(resultado => {

      if (resultado){
    
        setCurrentBebidas(resultado.docs.map(bebida => ({

            id : bebida.id,
            ...bebida.data()
        })));
      }
    });
  
  }, [category])

  return (
        
    <Container maxWidth="m">
      <br/>
      <Grid container>
          { currentBebidas.length > 0 ?          
          <ItemList items={currentBebidas}/>
          :
          <Grid container>
           <Grid item xs={12}>
           <Typography variant="h6" gutterBottom component="div" sx={{fontWeight: "bold", textAlign:"center"}} fullWidth>
            Cargando
           </Typography>
           </Grid>
           <Grid item xs={12}>
           <CircularProgress />
           </Grid>
           </Grid>}
      </Grid>
    </Container>
  );
}

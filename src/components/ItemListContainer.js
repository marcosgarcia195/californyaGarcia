import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {getFirestore} from '../firebase/index';
import {Container, Grid, Card, Typography, CircularProgress} from '@mui/material';
import ItemList from './ItemList.js';


export default function ItemListContainer({greeting}) {

  const { category } = useParams();
  const [currentDrinks, setCurrentDrinks] = useState([]);
  
  useEffect(() => {
    
    const dbase = getFirestore();
    let drinks = [];
    
    if (category){
      drinks = dbase.collection('Bebidas').where('categoryId','==',category);
    }
    else{
      drinks = dbase.collection('Bebidas');
    }
    

    drinks.get().then(result => {

      if (result){
    
        setCurrentDrinks(result.docs.map(drink => ({

            id : drink.id,
            ...drink.data()
        })));
      }
    });
  
  }, [category])

  return (
        
    <Container >
      <br/>
  
          { currentDrinks.length > 0 ?    
          <Grid container
          direction="row"
          justify="flex-start"
          alignItems="flex-start" style={{margin:'auto'}}> 

          <Grid item xs={12} sx={{marginBottom:4}}>
          <Card>
           <Typography variant="h6" component="div" sx={{fontWeight: "bold", textAlign:"center"}}>
            {!category ? "Todas las bebidas" : "Bebidas Categoria: " + category}
           </Typography>
           </Card>
          </Grid>          
                   
          <ItemList items={currentDrinks}/>
    
          </Grid>
          :
          <Grid container>
           <Grid item xs={12}>
           <Typography variant="h6" gutterBottom component="div" sx={{fontWeight: "bold", textAlign:"center"}}>
            Cargando
           </Typography>
           </Grid>
           <Grid item xs={12}>
           <CircularProgress />
           </Grid>
           </Grid>}
    </Container>
  );
}

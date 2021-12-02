import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router';
import {getFirestore} from '../firebase/index';
import {CartContext} from '../context/CartContext';
import {Container,Grid,Typography,CircularProgress} from '@mui/material';
import ItemDetail from './ItemDetail'


export default function ItemDetailContainer() {
  
    const {id} = useParams();
    const {addItem} = useContext(CartContext);
    const [currentDrink, setCurrentDrink] = useState(null);
    const [currentQuantity, setCurrentQuantity] = useState(0);
    const [drinkAdded, setDrinkAdded] = useState(false);

    useEffect(() => {

      const dbase = getFirestore();
      let drink;

      if (id){
        drink = dbase.collection('Bebidas').doc(id);
      }
            
      drink.get().then(drink => {
  
        if (drink){
      
          setCurrentDrink({
  
              id : drink.id,
              ...drink.data()
          });
        }
      });

    }, [id]);
     
    const handleAddItem = () => {

      const item = {
        item: {
          id: currentDrink['id'],
          name: currentDrink['name'],
          price: currentDrink['price'],
          pictureUrl: currentDrink['pictureUrl']
        },
        quantity: currentQuantity
      }

      addItem(item);
      setDrinkAdded(true);
    };

    function onDecrease(){

      if (currentQuantity !== 0){
          setCurrentQuantity(currentQuantity - 1);
      }
      
    };
  
    function onIncrease(){
  
          setCurrentQuantity(currentQuantity + 1);
    };


  return (

    <Container maxWidth="m">
      <br/>
      <Grid container alignItems="center" direction="column">      
        <Grid item xs={2}>              
        </Grid>
        <Grid item xs={8}>     
           { currentDrink ?
            <ItemDetail item={currentDrink} quantity={currentQuantity} decrease={onDecrease} increase={onIncrease} addItem={handleAddItem} drinkAdded={drinkAdded}/>
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
           </Grid>
          }
        </Grid>
      </Grid>
    </Container>
  );
}

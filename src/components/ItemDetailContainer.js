import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router';
import {getFirestore} from '../firebase/index';
import {CartContext} from '../context/CartContext';
import {Container,Grid,Typography,CircularProgress} from '@mui/material';
import ItemDetail from './ItemDetail'


export default function ItemDetailContainer() {
  
    const {id} = useParams();
    const {addItem,removeItem} = useContext(CartContext);
    const [currentBebida, setCurrentBebida] = useState(null);
    const [currentCantidad, setCurrentCantidad] = useState(0);

    useEffect(() => {

      const dbase = getFirestore();
      let bebida;

      if (id){
        bebida = dbase.collection('Bebidas').doc(id);
      }
            
      bebida.get().then(bebida => {
  
        if (bebida){
      
          setCurrentBebida({
  
              id : bebida.id,
              ...bebida.data()
          });
        }
      });

    }, [id]);
     
    const handleAddItem = () => {

      const item = {
        item: {
          id: currentBebida['id'],
          name: currentBebida['name'],
          price: currentBebida['price'],
          pictureUrl: currentBebida['pictureUrl']
        },
        quantity: currentCantidad
      }

      addItem(item);
    };

    function onDecrease(){

      if (currentCantidad !== 0){
          setCurrentCantidad(currentCantidad - 1);
      }
      
    };
  
    function onAdd(){
  
          setCurrentCantidad(currentCantidad + 1);
    };


  return (

    <Container maxWidth="m">
      <br/>
      <Grid container alignItems="center" direction="column">      
        <Grid item xs={2}>              
        </Grid>
        <Grid item xs={8}>     
           { currentBebida ?
            <ItemDetail item={currentBebida} cantidad={currentCantidad} disminuir={onDecrease} aumentar={onAdd} agregar={handleAddItem}/>
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
           </Grid>
          }
        </Grid>
      </Grid>
    </Container>
  );
}

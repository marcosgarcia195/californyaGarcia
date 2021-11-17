import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {getFirestore, increment} from '../firebase/index';
import {CartContext} from '../context/CartContext.js';
import {Container, Grid, Box, Card, Typography, Button, Backdrop, CircularProgress} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartItem from './CartItem';
import Alerta from './FeedBack/Alert';


export default function CartItemContainer({}) {

  const {items, removeItem, clear} = useContext(CartContext);
  const [currentItems, setCurrentItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = React.useState(false);
  const [ordenAgregada, setOrdenAgregada] = React.useState(false);

  useEffect(() => {

    setCurrentItems(items);
    totalBuy(items);

    }, [items]);


    const totalBuy = (bebidas) => {

        let tot = 0;

        bebidas.map((item) => {

         tot = tot + (item.item.price * item.quantity)

        });
        
        setTotal(tot);  
    }

    const handleDelAll = () => {

      clear();
    }

    const handleDelItem = (item) => {

      removeItem(item);
    }

    const handlePurchase = () => {

      setLoading(true);

      const dbase = getFirestore();
      const ordenes = dbase.collection('Ordenes');

      const nuevaOrden = {
        cliente : {
          apellido:'Garcia',
          nombre:'Marcos',
          celular:'1168561767'
        },
        items: currentItems,
        total: total
      }

      const batch = dbase.batch();

      ordenes.add(nuevaOrden).then((response) => {

        currentItems.forEach(({item,quantity}) => {

          const resta = increment(- quantity);

          const docRef = dbase.collection('Bebidas').doc(item.id);
          batch.update(docRef, {stock: resta});
        });

        batch.commit();
      
       setOrdenAgregada(response.id);

      }).catch( error => alert(error)).finally(setLoading(false));
       
    }


  return (
     
    <Container maxWidth="m">

      <br/>

        {currentItems.length != 0 ? 


            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={10}>
              <Card fullWidth>
                <Grid container>
                  <Grid item xs={2}/>
                  <Grid item xs={8}>
                    <Typography variant="h6" component="div" sx={{fontWeight: "bold", textAlign:"center"}}>
                      Items agregados al carrito
                    </Typography>
                  </Grid>
                  <Grid item xs={2} align="center">
                    <Button onClick={()=> handleDelAll()}size="small" color="error" variant="contained" startIcon={<DeleteIcon />}>
                      Limpiar
                    </Button>      
                  </Grid>
                </Grid>
              </Card>
              </Grid> 
              {currentItems.map((item) => 
              <Grid item xs={10}><CartItem key={item.id} item={item} deleteItem={handleDelItem}/></Grid>)}
              <Grid item xs={10}>
                <Card sx={{ display: 'flex' }} fullWidth>
                <Box sx={{ width: "100%" }}>
                <Typography variant="h6" component="div" sx={{fontWeight: "bold", textAlign:"center"}}>
                Total: $ {total}
                </Typography>
                </Box>
                </Card>
                <Card sx={{ display: 'flex' }} fullWidth>
                <Box sx={{ width: "100%" }}>
                <Button onClick={()=> handlePurchase()} size="small" variant="contained" fullWidth startIcon={<ShoppingCartIcon/>}>Comprar</Button>
                </Box>
                </Card>
              </Grid>
              </Grid> 
              :
              <Grid container spacing={2} justifyContent="center"> 
                <Grid item xs={10}>
                <Typography variant="h6" component="div" sx={{fontWeight: "bold", textAlign:"center"}}>
                  No hay Items Agregados
                </Typography>
                <Link to="/" style={{ textDecoration: 'none'}}><Button variant="outlined">Volver a Comprar</Button></Link>
                </Grid>
              </Grid>
    
        }  

        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Alerta descripcion={ ordenAgregada ?  ("La orden fue agregada. Codigo: " + ordenAgregada) : null} tipo={"success"}/>
    </Container>
  );
}

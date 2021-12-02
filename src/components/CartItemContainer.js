import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {getFirestore, increment} from '../firebase/index';
import {CartContext} from '../context/CartContext.js';
import CartList from './CartList.js';
import {Container, Grid, Box, Card, Typography, Button, Backdrop, CircularProgress, TextField} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Alert from './FeedBack/Alert';

export default function CartItemContainer() {

  const {items, removeItem, clear} = useContext(CartContext);
  const [currentItems, setCurrentItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [orderAdded, setOrderAdded] = useState(false);

  useEffect(() => {
  
    function loadItems() {
        
      setCurrentItems(items);
    }
    
    function totalBuy() {

      let total = 0;

      items.forEach((item) => {

       total = total + (item.item.price * item.quantity)

      });
      
      setTotal(total);  
    }

    loadItems();
    totalBuy();

    }, [items]);


    const handleDelAll = () => {

      clear();
    }

    const handleDelItem = (item) => {

      removeItem(item);
    }

    const handlePurchase = () => {

      setLoading(true);

      const dbase = getFirestore();
      const orders = dbase.collection('Ordenes');

      const newOrder = {
        buyer : {
          surname:'Garcia',
          name:'Marcos',
          phone:'1168561767'
        },
        items: currentItems,
        total: total
      }

      const batch = dbase.batch();

      orders.add(newOrder).then((response) => {

        currentItems.forEach(({item,quantity}) => {

          const newStock = increment(- quantity);

          const docRef = dbase.collection('Bebidas').doc(item.id);
          batch.update(docRef, {stock: newStock});
        });

        batch.commit();
      
       setOrderAdded(response.id);

      }).catch( error => alert(error)).finally(setLoading(false));
       
    }


  return (
     
    <Container maxWidth="m">

      <br/>

        {currentItems.length !== 0 ? 


            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={10}>
              <Card>
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

              <CartList items={items} deleteItem={handleDelItem} />

              <Grid item xs={10}>
                <Card sx={{ display: 'flex' }}>
                <Box sx={{ width: "100%" }}>
                <Typography variant="h6" component="div" sx={{fontWeight: "bold", textAlign:"center"}}>
                Total: $ {total}
                </Typography>
                </Box>
                </Card>
                <Card sx={{ display: 'flex', marginTop:2 }} >
                <Grid container>
                <Grid item xs={12} sx={{ width: "100%", marginTop:2 }}>
                <TextField id="surname" size="small" label="Apellido" variant="outlined" required/>
                <TextField id="name" size="small" label="Nombre" variant="outlined" required/>
                <TextField id="phone" size="small" label="Celular" variant="outlined" required />
                </Grid>
                <Grid item xs={12} sx={{ width: "100%", marginTop:2,marginBottom:2  }}>
                <TextField id="email" size="small" label="Email" variant="outlined" required />
                <TextField id="email2" size="small" label="Repetir Email" variant="outlined" required/>
                </Grid>
                </Grid>
                </Card>
                <Card sx={{ display: 'flex' }} >
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
        <Alert descripcion={ orderAdded ?  ("La orden fue agregada. Codigo: " + orderAdded) : null} tipo={"success"}/>
    </Container>
  );
}

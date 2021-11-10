import React, {useState, useEffect, useContext} from 'react';
import { CartContext } from '../context/CartContext.js';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CartItem from './CartItem.js';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



export default function CartItemContainer({}) {

  const { items, removeItem } = useContext(CartContext);
  const [currentItems, setCurrentItems] = useState([]);
  const [total, setTotal] = useState(0);


  React.useEffect(() => {

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

    const handleDelItem = (item) => {

        removeItem(item);
  
      }


  return (
     
    <Container maxWidth="m">

      <br/>

        {currentItems.length != 0 ? 

            <Grid container spacing={2} justifyContent="center"> 
            {currentItems.map((item) => 
            <Grid item xs={10}><CartItem key={item.id} item={item} deleteItem={handleDelItem}/></Grid>)}
            <Grid item xs={10}>
                <Card sx={{ display: 'flex' }} fullWidth>
                <Box sx={{ width: "100%" }}>
                <Typography variant="h6" gutterBottom component="div" sx={{fontWeight: "bold", textAlign:"center"}}>
                Total: ${total}
                </Typography>
                </Box>
                </Card>
            </Grid>
            </Grid> 
          :

          <Grid container spacing={2} justifyContent="center"> 
             <Grid item xs={10}>
             <Typography variant="h6" gutterBottom component="div" sx={{fontWeight: "bold", textAlign:"center"}}>
                No hay Items Agregados
            </Typography>
            <Link to="/" style={{ textDecoration: 'none'}}><Button variant="outlined">Volver a Comprar</Button></Link>
             </Grid>
            </Grid>
    
        }  

    </Container>
  );
}

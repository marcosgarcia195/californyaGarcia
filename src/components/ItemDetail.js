import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Grid, Card, CardHeader, CardMedia, CardActions, Button} from '@mui/material';
import ItemCount from './ItemCount';
import Alert from './FeedBack/Alert';

export default function ItemDetail({item, quantity, decrease, increase, addItem, drinkAdded}) {
 
  let history = useHistory();
  const goToPreviousPath = () => {
      history.goBack()
  }

    return (
        
        <>   
        <Card sx={{ maxWidth: 400,minWidth: 400 }} style={{margin:'10px'}}>
        <CardHeader
          title={item.name}
          subheader={'$ ' + item.price}
        />
        <CardHeader
          title={item.description}
        />
        <CardMedia style={{ width: "auto",margin: "auto"}}
          component="img"
          height="230"
          image={item.pictureUrl}
          alt={item.title}
        />
        
        { !drinkAdded ?
          <>
          <CardActions disableSpacing>
          <ItemCount increase={increase} decrease={decrease} quantity={quantity} addItem={addItem}/> 
          </CardActions>    
          </>
        :

        <>

        <CardActions disableSpacing>
        <Grid container>
        <Grid item xs={12}>
        <Button variant='outlined' color='primary' fullWidth onClick={goToPreviousPath}>Volver Atras</Button>
        </Grid>
        <Grid item xs={12} style={{paddingTop:4}}>
       <Button style={{textDecoration:"none"}} variant='outlined' color='primary' fullWidth><Link to="/cart" style={{textDecoration:"none",color:"darkcyan"}}>Finalizar Compra</Link></Button>
        </Grid>
        </Grid>
         </CardActions>  

          </>

        }
 
        </Card>
        <Alert description={ drinkAdded ?  ("Se agregaron (" + quantity + ") al Carrito") : null} type={"success"}/>
        </>
    );
  }
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ItemCount from './ItemCount';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ItemDetail({item, cantidad, aumentar, disminuir, agregar}) {

  

    return (
        
       
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
        <CardActions disableSpacing>
          <ItemCount aumentar={aumentar} disminuir={disminuir} cantidad={cantidad} agregar={agregar}/> 
        </CardActions>    
        
        <Grid container style={{paddingBottom:6}} >
          <Button style={{margin: "auto",textDecoration:"none"}} variant='outlined' color='primary'><Link to="/cart" style={{textDecoration:"none",color:"darkcyan"}}>Finalizar Compra</Link></Button>
        </Grid>
        
        </Card>
  

    );
  }
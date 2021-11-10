import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ItemDetail({item, deleteItem}) {

  

    return (
        
       
        <Card sx={{ display: 'flex' }} fullWidth>
            <Box sx={{ width: { xs: '50%', md: '40%', lg: '20%' } , borderRight: 1, borderColor: 'grey.200' }}  >
                <CardMedia style={{ width: "auto",margin: "auto"}}
                component="img"
                height="130"
                image={item.item.pictureUrl}
                alt={item.title}
                />
            </Box>
            <Grid container>
            <Grid item xs={12}>
            <Box sx={{ width: '100%'}}> 
                <CardHeader sx={{ width: '80%', borderBottom: 1, borderColor: 'grey.200', margin:'auto' }}
                title={item.item.title}
                />
            </Box>
            </Grid>
            <Grid item xs={12}>
            <Box sx={{ width: '100%'}}> 
                <CardContent sx={{ width: '80%', margin:'auto' }}>
                <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                <Box sx={{ width: '100%'}}> 
                <Chip label={"Precio Unitario: $" + item.item.price} variant="outlined" />
                <Chip label={"Cantidad: " + item.quantity} variant="outlined" sx={{marginLeft:'10px'}}/>
                <Chip icon={<DeleteIcon style={{color:"darkred"}}/>} sx={{marginLeft:'10px', color:"darkred"}} label="Quitar" variant="outlined" onClick={()=>{deleteItem(item)}}/></Box>
                </Grid>
                <Grid item xs={2}>
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ borderBottom: 1, borderRadius: 1, borderColor: 'grey.200', fontSize:15,fontWeight: "bold"}}>
                {"  Subtotal: $" + (item.quantity*item.item.price) + "  "}
                </Typography>
                </Grid>
                </Grid>
                </CardContent>  
            </Box>
            </Grid>
            </Grid>
        </Card>

    );
  }
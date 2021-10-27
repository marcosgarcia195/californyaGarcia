import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


export default function ItemDetail({item}) {
    return (
        
       
        <Card sx={{ maxWidth: 200,minWidth: 200 }} style={{margin:'10px'}}>
        <CardHeader
          title={item.title}
          subheader={'$ ' + item.price}
        />
        <CardHeader
          title={item.description}
        />
        <CardMedia style={{ width: "auto",display: "flex",
                  alignItem: "center",
                  justifyContent: "center"}}
          component="img"
          height="194"
          image={item.pictureUrl}
          alt={item.title}
        />
        <CardActions disableSpacing>
          
            </CardActions>
        </Card>
  

    );
  }
import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardHeader, CardMedia, CardActions} from '@mui/material';


export default function Item({item}) {
    return (

        <Card sx={{ maxWidth: 200,minWidth: 200 }} style={{margin:'10px'}}>
        <CardHeader sx={{ maxHeight: 40,minHeight: 40 }}
          title={item.name}
        />
        <CardHeader sx={{ maxHeight: 2,minHeight: 2 }}
          subheader={'$ ' + item.price}
        />
        <Link to={"/item/" + item.id}>
          
        <CardMedia style={{ width: "auto",margin: "auto"}}
          component="img"
          height="190"
          image={item.pictureUrl}
          alt={item.title}
        />
        </Link>
        <CardActions disableSpacing>
          
        </CardActions>
      </Card>
    );
  }
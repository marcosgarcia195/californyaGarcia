import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';


export default function Item({item}) {
    return (

        <Card sx={{ maxWidth: 200,minWidth: 200 }} style={{margin:'10px'}}>
        <CardHeader sx={{ maxHeight: 40,minHeight: 40 }}
          title={item.title}
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
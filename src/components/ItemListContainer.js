import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';

const greetingStyle = {
  color: 'darkblue',
  fontSize: 22 ,
};

export default function ItemListContainer({greeting}) {

  const [items, setItems] = useState([
    {id:0,title:'Fernet Branca 750 ml',price:'650',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_889474-MLA47952840958_102021-O.webp'},
    {id:1,title:'Gancia 1 l',price:'550',pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_623259-MLA46081303995_052021-O.webp'},
    {id:2,title:'Jagermeister 700 ml',price:'2500',pictureUrl:'none'}
  ]);


  return (
        
    <Container maxWidth="m">
      <p style={greetingStyle}>{greeting}</p>
      <Grid container>          
            <ItemList items={items}/>
      </Grid>
      
    </Container>
  );
}

import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ItemCount from './ItemCount.js'

const greetingStyle = {
  color: 'darkblue',
  fontSize: 22 ,
};


export default function ItemListContainer({greeting}) {
    return (
          
      <Container maxWidth="m">
        <Box sx={{ bgcolor: 'white', height: '100vh' }}>
        <p style={greetingStyle}>{greeting}</p>
        <ItemCount name={'Fernet Branca 700ml'} stock={9} initial={1}/>
        </Box>
      </Container>
    );
  }
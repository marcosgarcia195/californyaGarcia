import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const greetingStyle = {
  color: 'darkblue',
  fontSize: 22 ,
};


export default function ItemListContainer({greeting}) {
    return (
          
      <Container maxWidth="m">
        <Box sx={{ bgcolor: 'white', height: '100vh' }}>
        <p style={greetingStyle}>{greeting}</p>
        </Box>
      </Container>
    );
  }
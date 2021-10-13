import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Californya Drinks
          </Typography>
          <IconButton color="inherit" sx={{ fontSize: 14 }}>
            Promociones
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: 14 }}>
            Productos
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: 14 }}>
            Metodos de Pago
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: 14 }}>
            Ubicacion
          </IconButton>

          <Button color="inherit">Ingresar</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <br></br>

    <h3>Ofertas Especiales por el Dia de la Madre</h3>

    </>
  );
}
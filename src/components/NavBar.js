import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../context/CartContext.js';
import {AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget';
import './NavBar.css';


export default function ButtonAppBar() {

  const { quantity } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <div className="NavBar">

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
          <IconButton color="inherit">
            <Link to="/" style={{ textDecoration: 'none'}} className="NavBarItem">Inicio</Link>
          </IconButton>
          <IconButton id="categories" aria-controls="basic-menu" aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} color="inherit">
            <Typography className="NavBarItem">
            Categorias
            </Typography>
          </IconButton>
          <Menu anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'categories',
          }}>
            <Link to="/category/conalcohol" className="NavBarSubItem"><MenuItem onClick={handleClose}>Con Alcohol</MenuItem></Link>
            <Link to="/category/sinalcohol" className="NavBarSubItem"><MenuItem onClick={handleClose}>Sin Alcohol</MenuItem></Link>
          </Menu>
          <IconButton color="inherit">
            <Typography className="NavBarItem">
            Metodos de Pago
            </Typography>
          </IconButton>
          <IconButton color="inherit" style={{marginRight:'20px'}}>
            <Typography className="NavBarItem">
            Ubicacion
            </Typography>
          </IconButton>
          { quantity ? <Link to="/cart"><CartWidget/></Link> : null}
          <Button color="inherit">Ingresar</Button>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  );
}
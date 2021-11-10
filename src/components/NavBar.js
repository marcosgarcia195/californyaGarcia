import './NavBar.css';
import React, {useState, useEffect, useContext} from 'react';
import { CartContext } from '../context/CartContext.js';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';


export default function ButtonAppBar() {

  const { quantity } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
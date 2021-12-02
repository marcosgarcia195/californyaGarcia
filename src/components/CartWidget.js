import {useContext} from 'react';
import { CartContext } from '../context/CartContext.js';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';


export default function CartWidget() {

  const { quantity } = useContext(CartContext);

    return (
          
      <IconButton> 
        <Badge badgeContent={quantity} color="primary" style={{marginRight:'20px'}}>
            <ShoppingCartIcon color="action" />
        </Badge>
      </IconButton>
    );
  }
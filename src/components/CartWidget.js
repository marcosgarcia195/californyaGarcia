import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

export default function CartWidget() {
    return (
          
      <IconButton> 
        <Badge badgeContent={1} color="primary" style={{marginRight:'20px'}}>
            <ShoppingCartIcon color="action" />
        </Badge>
      </IconButton>
    );
  }
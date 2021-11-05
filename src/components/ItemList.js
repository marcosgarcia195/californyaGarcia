import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from './Item.js'


export default function ItemList({items}) {

    const [currentItems, setCurrentItems] = useState([]);
    
    React.useEffect(() => {

        setCurrentItems(items);

    },[items]);
  
    return (          
      currentItems.map((item) =>          
                <Item key={item.id} item={item} />
      )
    );
    
  }
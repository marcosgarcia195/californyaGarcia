import React, {useState, useEffect} from 'react';
import {Grid} from '@mui/material';
import Item from './Item.js'

export default function ItemList({items}) {

    const [currentItems, setCurrentItems] = useState([]);
    
    useEffect(() => {

        setCurrentItems(items);

    }, [items]);
  
    return (          
      currentItems.map((item) =>
                <Grid item xs={3} style={{marginBottom:10}}>      
                <Item key={item.id} item={item} />
                </Grid>
      )
    );
    
  }
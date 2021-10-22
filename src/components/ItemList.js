import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from './Item.js'


export default function ItemList({items}) {

    const [currenItems, setCurrentItems] = useState([])
    
    const itemsResponse = new Promise((resolve,reject) => {
    
        setTimeout(() => {
            resolve(items);
        },2000);
    });

    itemsResponse.then((result) => {

        setCurrentItems(result);

    })

    return (          
      currenItems.map((item) =>          
                <Item item={item} />
      )
    );
    
  }
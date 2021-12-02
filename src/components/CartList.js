import React, {useState, useEffect} from 'react';
import CartItem from './CartItem.js'


export default function CartList({items, deleteItem}) {

    const [currentItems, setCurrentItems] = useState([]);
    
    useEffect(() => {

        setCurrentItems(items);
       
    }, [items]);
  
    return (          
      currentItems.map((item) =>          
                <CartItem key={item.item.id} item={item} deleteItem={deleteItem} />
      )
    );
    
  }